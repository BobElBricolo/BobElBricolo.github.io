import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-preview-app',
  imports: [
    MatCard,
    TranslatePipe
  ],
  templateUrl: './preview-app.component.html',
  styleUrl: './preview-app.component.css'
})
export class PreviewAppComponent {
  teamA = { name: 'Team A', score: 0 };
  teamB = { name: 'Team B', score: 2 };
  winner = 'B';

  stats = [
    { name: 'NovaStrike', kills: 15, kd: 2.5, winRate: 75, mvps: 3 },
    { name: 'PixelPhantom', kills: 9, kd: 1.2, winRate: 62, mvps: 1 },
    { name: 'ShadowWolf', kills: 7, kd: 0.9, winRate: 45, mvps: 0 },
    { name: 'RogueBlaze', kills: 12, kd: 1.7, winRate: 68, mvps: 2 },
  ];
}
