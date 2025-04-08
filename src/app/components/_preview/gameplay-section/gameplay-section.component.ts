import { Component } from '@angular/core';
import {GameplayComponent} from "../gameplay/gameplay.component";

@Component({
  selector: 'app-gameplay-section',
    imports: [
        GameplayComponent
    ],
  templateUrl: './gameplay-section.component.html',
  styleUrl: './gameplay-section.component.css'
})
export class GameplaySectionComponent {

}
