import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-fonctionnality',
  imports: [TranslatePipe],
  templateUrl: './fonctionnality.component.html',
  styleUrl: './fonctionnality.component.css'
})
export class FonctionnalityComponent {
  private readonly router = inject(Router)

  openApp() {
    this.router.navigate(['/gameplay']);
  }
}
