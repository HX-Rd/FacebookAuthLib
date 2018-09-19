import { Injectable } from '@angular/core';
import { ClientConfig } from '../client.config';
import { Router } from '@angular/router';
import { CallbackComponent } from '../callback/callback.component';
import { FacebookAuthService } from './facebook-auth.service';
import { LocalStorageService } from 'ngx-store';

@Injectable()
export class FacebookAuthInjector {
    private static instance: FacebookAuthService = null;

    // Return the instance of the service
    public static getInstance(config: ClientConfig, router: Router, storage: LocalStorageService): FacebookAuthService {
        if (FacebookAuthInjector.instance === null) {
            router.config.push(
                {
                    path: config.redirectUrl.split('/').pop(),
                    component: CallbackComponent
                }
            );
            router.resetConfig(router.config);
            FacebookAuthInjector.instance = new FacebookAuthService(config, router, storage);
        }
        return FacebookAuthInjector.instance;
    }
}
