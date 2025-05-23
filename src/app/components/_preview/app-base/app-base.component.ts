import { Component } from '@angular/core';
import {GameplaySectionComponent} from '../gameplay-section/gameplay-section.component';
import {PreviewSectionComponent} from '../preview-section/preview-section.component';
import {StatsPreviewComponent} from '../stats-preview/stats-preview.component';
import {TreePreviewComponent} from '../tree-preview/tree-preview.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-app-base',
  imports: [
    GameplaySectionComponent,
    PreviewSectionComponent,
    TreePreviewComponent,
    TranslatePipe
  ],
  templateUrl: './app-base.component.html',
  styleUrl: './app-base.component.css'
})
export class AppBaseComponent {
  showPopup = true;

}
