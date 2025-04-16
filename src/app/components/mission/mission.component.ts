import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-mission',
  imports: [
    TranslatePipe
  ],
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
