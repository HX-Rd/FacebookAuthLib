import { Subscription } from 'rxjs';
import { Component, OnInit, TemplateRef, ContentChild, ViewChild, OnDestroy } from '@angular/core';

import { LoadingViewService } from '../services/loading-view.service';
import { FacebookAuthService } from '../services/facebook-auth.service';

@Component({
  selector: '[fb-login]',
  templateUrl: './login.component.html',
  host: {
    '(click)': "handleClick($event)"
  }
})
export class LoginComponent implements OnInit, OnDestroy {
  @ContentChild('login') loginContent: TemplateRef<any>;
  @ContentChild('logout') logoutContent: TemplateRef<any>;
  @ContentChild('loading') loadingContent: TemplateRef<any>;
  @ViewChild('defaultLogin') defaultLoginContent: TemplateRef<any>;
  @ViewChild('defaultLogout') defaultLogoutContent: TemplateRef<any>;
  @ViewChild('defaultLoading') defaultLoadingContent: TemplateRef<any>;

  activeLoginContent: TemplateRef<any>;
  activeLogoutContent: TemplateRef<any>;
  activeLoadingContent: TemplateRef<any>;
  activeTemplate: TemplateRef<any>;

  loggedInSubscription: Subscription;

  constructor(
    private facebookService: FacebookAuthService,
    private loadingViewService: LoadingViewService
  ) {
  }

  ngOnInit() {
    this.activeLoginContent = this.loginContent === undefined
      ? this.defaultLoginContent
      : this.loginContent;
    this.activeLogoutContent = this.logoutContent === undefined
      ? this.defaultLogoutContent
      : this.logoutContent;
    this.activeLoadingContent = this.loadingContent === undefined
      ? this.defaultLoadingContent
      : this.loadingContent;

    this.loadingViewService.loadingView = this.activeLoadingContent;

    this.activeTemplate = this.facebookService.isLoggedInSubject.getValue()
      ? this.activeLogoutContent
      : this.activeLoginContent;

    this.loggedInSubscription = this.facebookService.isLoggedInSubject.subscribe(
      (isLoggedIn: boolean) => {
        this.activeTemplate = isLoggedIn
          ? this.activeLogoutContent
          : this.activeLoginContent;
      }
    )
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }


  handleClick(event) {
    if(this.facebookService.isLoggedInSubject.getValue()) {
      this.logout();
    }
    else {
      this.login();
    }
  }

  login() {
    this.facebookService.login();
  }

  logout() {
    this.facebookService.logOut();
  }
}

