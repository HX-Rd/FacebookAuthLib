import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService, NgxStorageEvent } from 'ngx-store';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ClientConfig } from '../client.config';

@Injectable()
export class FacebookAuthService {
  public isLoggedInSubject = new BehaviorSubject<boolean>(this.storage.get('access_token') !== null);
  public accessTokenSubject = new BehaviorSubject<string>(this.storage.get('access_token'));
  public gravatarSubject = new BehaviorSubject<string>(this.storage.get('gravatar'));
  public userInfoSubject = new BehaviorSubject<User>( this.storage.get('facebook_user_info') === null ? null : JSON.parse(this.storage.get('facebook_user_info')));

  constructor(
    @Inject('CLIENT_CONFIG') private config: ClientConfig,
    private router: Router,
    private storage: LocalStorageService,
  ) {
    this.storage.observe('access_token').subscribe(
      (event: NgxStorageEvent) => {
        this.isLoggedInSubject.next(true);
        this.accessTokenSubject.next(event.newValue);
      }
    );
    this.storage.observe('gravatar').subscribe(
      (event: NgxStorageEvent) => {
        this.gravatarSubject.next(event.newValue);
      }
    );
    this.storage.observe('facebook_user_info').subscribe(
      (event: NgxStorageEvent) => {
        this.userInfoSubject.next(event.newValue);
      }
    );
  }
  getAccessToken(): string {
    let expires = +this.storage.get('expires');
    if (expires) {
      let now = Math.floor(Date.now());
      if (now > expires) {
        this.logOut();
        throw new Error('Access token expired');
      }
    }
    let access_token = this.storage.get('access_token');
    if (access_token) {
      return access_token;
    }
    throw new Error('User is not logged in');
  }
    getAccessTokenExpiration(): number {
      return +this.storage.get('expires');
    }

  logOut() {
    this.cleanupStorage();
    this.isLoggedInSubject.next(false);
    if (this.config.redirectAfterLogout) {
      this.router.navigate([this.config.redirectAfterLogout]);
    }
  }

  login() {
    let scopes = encodeURI(this.config.scopes.join(' '));
    let url = `https://www.facebook.com/v3.1/dialog/oauth`
    + `?response_type=token`
    + `&client_id=${this.config.clientId}`
    + `&state=${this.generateRandomString(40)}`
    + `&redirect_uri=${this.config.redirectUrl}`
    + `&scope=${scopes}`
    + `&nonce=${this.generateRandomString(40)}`;
    window.open(url, '_self')
  }

  getUserInfo(): User  {
    return JSON.parse(this.storage.get('facebook_user_info'));
  }

  getGravatar(): string {
    return this.gravatarSubject.getValue();
  }

  private generateRandomString(length: number) : string {
    return Array.from(Array(length).keys()).map(() => { return (~~(Math.random()*36)).toString(36) }).join('');
  }

  private cleanupStorage() {
    this.storage.remove('gravatar');
    this.storage.remove('access_token');
    this.storage.remove('expires');
    this.storage.remove('expires_in');
    this.storage.remove('facebook_user_info');
    this.storage.remove('state');
  }
}
