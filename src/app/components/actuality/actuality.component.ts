import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-actuality',
  imports: [],
  templateUrl: './actuality.component.html',
  styleUrl: './actuality.component.css'
})
export class ActualityComponent {

  private readonly router = inject(Router)

  openRank() {
    this.router.navigateByUrl('/tournament/27');
  }
}
