import { Routes } from '@angular/router';
import {TournamentsPageComponent} from './components/tournaments-page/tournaments-page.component';
import {HomeComponent} from './components/home/home.component';
import {DownloadComponent} from './components/download/download.component';
import {HeroComponent} from './components/hero/hero.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {DownloadPageComponent} from './components/download-page/download-page.component';
import { ProfilComponent } from './components/_profil/profil/profil.component';
import { userLoggedGuard } from './_guards/userLoggedIn/user-logged.guard';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'tournaments', component: TournamentsPageComponent, data: { animation: 'tournaments-page' }},
  {path: 'about', component: HomePageComponent, data: { animation: 'aboutPage' }},
  {path: 'installation', component: DownloadPageComponent, data: { animation: 'downloadPage' }},
  {path: 'profil', component: ProfilComponent, canActivate: [userLoggedGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];
