import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';

import { FacebookAuthLibModule } from 'facebook-auth-lib';
import { FacebookAuthService } from 'facebook-auth-lib';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacebookAuthLibModule.withConfig({
      clientId: '',
      redirectUrl: 'http://localhost:4200/authcallback',
      redirectAfterLogin: '/success',
      redirectAfterLogout: '/'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
