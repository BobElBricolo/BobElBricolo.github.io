import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-tree-preview',
  imports: [
    TranslatePipe
  ],
  templateUrl: './tree-preview.component.html',
  styleUrl: './tree-preview.component.css'
})
export class TreePreviewComponent {

}
