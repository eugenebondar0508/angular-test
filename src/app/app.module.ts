import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { NewsPagesComponent } from './news-pages/news-pages.component';
import { ProfilePagesComponent } from './profile-pages/profile-pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';

import { NewsapiservicesService } from './service/newsapiservices.service';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPagesComponent,
    NewsPagesComponent,
    ProfilePagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NewsapiservicesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
