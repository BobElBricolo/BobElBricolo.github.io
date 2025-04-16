import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TranslatePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GetGood';
  constructor(private translate: TranslateService) {
    // Define the list of available languages
    const supportedLangs = ['en', 'fr'];
    const browserLang = translate.getBrowserLang();

    const langToUse = browserLang && supportedLangs.includes(browserLang) ? browserLang : 'en';
    translate.use(langToUse);
  }

  showPopup = true;
}
