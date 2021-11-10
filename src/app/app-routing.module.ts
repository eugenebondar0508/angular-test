import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { NewsPagesComponent } from './news-pages/news-pages.component';
import { ProfilePagesComponent } from './profile-pages/profile-pages.component';

const routes: Routes = [
  {path: ' ', component: HomePageComponent},
  {path: 'login', component: LoginPagesComponent},
  {path: 'news', component: NewsPagesComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfilePagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
