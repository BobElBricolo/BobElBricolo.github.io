import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-download-section',
  imports: [TranslatePipe],
  templateUrl: './download-section.component.html',
  styleUrl: './download-section.component.css'
})
export class DownloadSectionComponent {
  private readonly router = inject(Router)

  openApp() {
    this.router.navigate(['/gameplay']);
  }
}
