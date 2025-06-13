import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { ReplyComponent } from './components/reply/reply.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TweetComponent,
    ReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RecaptchaV3Module   
  ],
  exports: [TweetComponent],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Ld8gl8rAAAAAMq-KW6fNvx8c_jCx08nXNdWDsWx' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
