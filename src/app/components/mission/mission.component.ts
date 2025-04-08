import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mission',
  imports: [],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent {
  img_src = "assets/_background/floating-guys.png";

  private readonly router = inject(Router)

  openDownload() {
    this.router.navigateByUrl('/download');
  }
}
