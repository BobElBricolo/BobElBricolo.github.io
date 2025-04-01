import { Component } from '@angular/core';
import {FonctionnalityComponent} from "../fonctionnality/fonctionnality.component";
import {HeroComponent} from "../hero/hero.component";
import {MissionComponent} from "../mission/mission.component";
import {DownloadSectionComponent} from '../download-section/download-section.component';

@Component({
  selector: 'app-download-page',
  imports: [
    FonctionnalityComponent,
    HeroComponent,
    MissionComponent,
    DownloadSectionComponent
  ],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.css'
})
export class DownloadPageComponent {

}
