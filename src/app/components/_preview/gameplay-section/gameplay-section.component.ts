import { Component } from '@angular/core';
import {GameplayComponent} from "../gameplay/gameplay.component";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-gameplay-section',
    imports: [
        GameplayComponent,
        TranslatePipe
    ],
  templateUrl: './gameplay-section.component.html',
  styleUrl: './gameplay-section.component.css'
})
export class GameplaySectionComponent {

}
