import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-conctact',
  templateUrl: './conctact.component.html',
  styleUrls: ['./conctact.component.css']
})
export class ConctactComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Alexis Young - Contact')
  }
}
