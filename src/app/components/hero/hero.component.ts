import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [
    TranslatePipe
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  img_src = "assets/_background/Astronaut-Home.png"

  private readonly router = inject(Router)

    openDownload() {
        this.router.navigateByUrl('/download');
    }
}
