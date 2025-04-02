import {Component, ViewChild} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatSidenavModule,
    MatListItem,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  userProfilPicturePath: string = "/../../assets/Logo.png";
}
