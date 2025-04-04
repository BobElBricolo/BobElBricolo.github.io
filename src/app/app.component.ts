import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ConnexionComponent } from "./components/_connexion/connexion/connexion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ConnexionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GetGood';
}
