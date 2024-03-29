import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { th_TH } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BypassInterceptor } from './core/interceptor/bypass/bypass.interceptor';
import { DemoCreateImageFromHtmlComponent } from './component/demo-create-image-from-html/demo-create-image-from-html.component';

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
    DemoCreateImageFromHtmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: th_TH },
    { provide: HTTP_INTERCEPTORS, useClass: BypassInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
