import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-error403',
  imports: [
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './error403.component.html',
  styleUrl: './error403.component.css'
})
export class Error403Component {

}
