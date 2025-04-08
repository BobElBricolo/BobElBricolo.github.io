import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fonctionnality',
  imports: [],
  templateUrl: './fonctionnality.component.html',
  styleUrl: './fonctionnality.component.css'
})
export class FonctionnalityComponent {
  img_path = "assets/_background/controllers.png";
  private readonly router = inject(Router)

  openApp() {
    this.router.navigate(['/gameplay']);
  }
}
