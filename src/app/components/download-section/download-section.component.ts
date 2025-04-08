import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-download-section',
  imports: [],
  templateUrl: './download-section.component.html',
  styleUrl: './download-section.component.css'
})
export class DownloadSectionComponent {
  img_path1 = "assets/_background/spaceship.png";
  private readonly router = inject(Router)

  openApp() {
    this.router.navigate(['/gameplay']);
  }
}
