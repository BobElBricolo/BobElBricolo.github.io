import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {MissionComponent} from '../mission/mission.component';
import {FonctionnalityComponent} from '../fonctionnality/fonctionnality.component';
import {DownloadPageComponent} from '../download-page/download-page.component';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroComponent,
    MissionComponent,
    ContactComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
