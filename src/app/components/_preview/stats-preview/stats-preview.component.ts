import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-preview',
  templateUrl: './stats-preview.component.html',
  styleUrls: ['./stats-preview.component.css'],
})
export class StatsPreviewComponent {
  rounds = [
    [
      { teamA: 'FaZe Clan', scoreA: 0, teamB: 'Ninjas in Pyjamas', scoreB: 2 },
      { teamA: 'Astralis', scoreA: 2, teamB: 'Team Liquid', scoreB: 0 },
      { teamA: 'FaZe Clan', scoreA: 1, teamB: 'Team Liquid', scoreB: 2 },
      { teamA: 'Ninjas in Pyjamas', scoreA: 0, teamB: 'Team Liquid', scoreB: 2 },
    ],
    [
      { teamA: 'Ninjas in Pyjamas', scoreA: 0, teamB: 'Astralis', scoreB: 2 },
      { teamA: 'Team Liquid', scoreA: 0, teamB: 'Astralis', scoreB: 2 },
    ],
    [
      { teamA: 'Astralis', scoreA: 2, teamB: 'Team Liquid', scoreB: 0 },
    ],
  ];

  generateIndexArray(size: number): number[] {
    return Array.from({ length: size }, (_, i) => i);
  }

  isUpperRound(index: number): boolean {
    return index %2 === 0;
  }

  isRightRound(index: number): boolean {
    return index < 2
  }

  isLeftRound(index: number): boolean {
    return index > 0;
  }

  protected readonly Math = Math;
}
