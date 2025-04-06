import { Routes } from '@angular/router';
import { TournamentsPageComponent } from './components/tournaments-page/tournaments-page.component';
import { HomeComponent } from './components/home/home.component';
import { DownloadComponent } from './components/download/download.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { ProfilComponent } from './components/_profil/profil/profil.component';
import { userLoggedGuard } from './_guards/userLoggedIn/user-logged.guard';
import { ConnexionComponent } from './components/_connexion/connexion/connexion.component';
import { RegisterComponent } from './components/_connexion/register/register.component';
import { ForgotPasswordComponent } from './components/_connexion/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: 'login', component: ConnexionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'tournaments', component: TournamentsPageComponent, data: { animation: 'tournaments-page' } },
  { path: 'about', component: HomePageComponent, data: { animation: 'aboutPage' } },
  { path: 'installation', component: DownloadPageComponent, data: { animation: 'downloadPage' } },
  { path: 'profil', component: ProfilComponent, canActivate: [userLoggedGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];
