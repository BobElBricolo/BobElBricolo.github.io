import { Routes } from '@angular/router';
import {TournamentsPageComponent} from './tournaments-page/tournaments-page.component';
import {HomeComponent} from './home/home.component';
import {DownloadComponent} from './download/download.component';
import {HeroComponent} from './hero/hero.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DownloadPageComponent} from './download-page/download-page.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'tournaments', component: TournamentsPageComponent, data: { animation: 'tournaments-page' }},
  {path: 'about', component: HomePageComponent, data: { animation: 'aboutPage' }},
  {path: 'installation', component: DownloadPageComponent, data: { animation: 'downloadPage' }},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];
