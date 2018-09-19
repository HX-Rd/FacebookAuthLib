import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { WebStorageModule } from 'ngx-store';
import { LocalStorageService } from 'ngx-store';

import { FacebookAuthFactory } from './factories/injection-factories';

import { ClientConfig, defaultScopes, defaultUserFields } from './client.config';
import { LoginComponent } from './login/login.component';

import { FacebookAuthService } from './services/facebook-auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WebStorageModule
  ],
  declarations: [
    LoginComponent,
    CallbackComponent
  ],
  entryComponents: [
    LoginComponent,
    CallbackComponent
  ],
  exports: [
    LoginComponent,
  ]
})
export class FacebookAuthLibModule {
  static withConfig(clientConfig: ClientConfig): ModuleWithProviders {
    if (!clientConfig.scopes) {
      clientConfig.scopes = defaultScopes;
    }
    if (!clientConfig.userFields) {
      clientConfig.userFields = defaultUserFields;
    }
    return {
      ngModule: FacebookAuthLibModule,
      providers: [
        { provide: 'CLIENT_CONFIG', useValue: clientConfig},
        LocalStorageService,
        {
          provide: FacebookAuthService,
          deps: [
            'CLIENT_CONFIG',
            Router,
            LocalStorageService
          ],
          useFactory: FacebookAuthFactory,
          multi: false
        },
      ]
    };
  }
}

export { ClientConfig } from './client.config';
export { FacebookAuthService } from './services/facebook-auth.service';
export { LoginComponent } from './login/login.component';
