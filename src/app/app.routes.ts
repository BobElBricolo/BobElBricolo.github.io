import { Routes } from '@angular/router';
import { TournamentsPageComponent } from './components/tournaments-page/tournaments-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DownloadPageComponent } from './components/download-page/download-page.component';
import { ProfilComponent } from './components/_profil/profil/profil.component';
import { userLoggedGuard } from './_guards/userLoggedIn/user-logged.guard';
import { ConnexionComponent } from './components/_connexion/connexion/connexion.component';
import { RegisterComponent } from './components/_connexion/register/register.component';
import { ForgotPasswordComponent } from './components/_connexion/forgot-password/forgot-password.component';
import {AccueilPageComponent} from './components/accueil-page/accueil-page.component';
import {TournamentDetailsComponent} from './components/tournament-details/tournament-details.component';
import {Error404Component} from './components/error404/error404.component';
import {Error403Component} from './components/error403/error403.component';
import {AppBaseComponent} from './components/_preview/app-base/app-base.component';

export const routes: Routes = [
  { path: 'login', component: ConnexionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: AccueilPageComponent, data: { animation: 'HomePage' } },
  { path: 'tournaments', component: TournamentsPageComponent, data: { animation: 'tournaments-page' } },
  { path: 'tournament/:id', component: TournamentDetailsComponent, data: { animation: 'tournaments-page' } },
  { path: 'about', component: HomePageComponent, data: { animation: 'aboutPage' } },
  { path: 'download', component: DownloadPageComponent, data: { animation: 'downloadPage' } },
  { path: 'profil', component: ProfilComponent, canActivate: [userLoggedGuard] },
  {path: '404', component: Error404Component, data: { animation: '404Page' }},
  {path: '403', component: Error403Component, data: { animation: '404Page' }},
  {path: 'gameplay', component:AppBaseComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**', redirectTo: '404', pathMatch: 'full' } // Wildcard route for a 404 page
];
