import { Component } from '@angular/core';
import {PreviewAppComponent} from '../preview-app/preview-app.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-preview-section',
  imports: [
    PreviewAppComponent,
    TranslatePipe
  ],
  templateUrl: './preview-section.component.html',
  styleUrl: './preview-section.component.css'
})
export class PreviewSectionComponent {

}
