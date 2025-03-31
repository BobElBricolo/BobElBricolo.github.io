import { Component } from '@angular/core';

@Component({
  selector: 'app-tournaments-page',
  imports: [],
  templateUrl: './tournaments-page.component.html',
  styleUrl: './tournaments-page.component.css',
})
export class TournamentsPageComponent {
  tournaments = [
    {
      title: 'Valorant Showdown',
      game: 'Valorant',
      date: 'April 12, 2025',
      link: '#',
      image: 'assets/Warzone.jpg'
    },
    {
      title: 'Rocket League Clash',
      game: 'Rocket League',
      date: 'April 15, 2025',
      link: '#',
      image: 'assets/Warzone.jpg'
    },
    {
      title: 'League of Legends Cup',
      game: 'LoL',
      date: 'April 20, 2025',
      link: '#',
      image: 'assets/Warzone.jpg'
    }
  ];

}
