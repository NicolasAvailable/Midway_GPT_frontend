import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://www.angular.at/api'],
        sendAccessToken: true,
      },
    }),
    AppRoutingModule,
    RouterOutlet,
    BrowserAnimationsModule,
    NgxSonnerToaster,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    OAuthService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
