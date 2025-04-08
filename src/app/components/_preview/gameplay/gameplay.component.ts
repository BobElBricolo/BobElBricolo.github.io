import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-gameplay',
  imports: [
    MatIcon
  ],
  templateUrl: './gameplay.component.html',
  styleUrl: './gameplay.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [ // quand la barre apparaît
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-out', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [ // quand elle disparaît
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class GameplayComponent {
  isOpen = false;

  tournamentInfo = {
    kills: 12,
    tournamentRank: 3,
    gameRank: 1,
    round: 4,
    opponents: [
      { name: 'GhostRider', kills: 8 },
      { name: 'NovaStrike', kills: 10 },
      { name: 'PixelPhantom', kills: 5 },
    ]
  };

  toggleStatusBar() {
    this.isOpen = !this.isOpen;
  }
}


