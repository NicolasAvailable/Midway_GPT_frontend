import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MwAlertModule } from './components/alerts/mw-alert.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor/auth-interceptor.service';

@NgModule({
  imports: [CommonModule, MwAlertModule],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class SharedModule {}
