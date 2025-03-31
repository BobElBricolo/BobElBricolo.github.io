import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {MissionComponent} from '../mission/mission.component';
import {FonctionnalityComponent} from '../fonctionnality/fonctionnality.component';
import {DownloadPageComponent} from '../download-page/download-page.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    MissionComponent,
    FonctionnalityComponent,
    DownloadPageComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
