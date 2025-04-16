import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

// Fonction pour charger la langue AVANT le bootstrap
async function main() {
  // Bootstrap partiel pour récupérer le TranslateService
  const appRef = await bootstrapApplication(AppComponent, appConfig);

  const translate = appRef.injector.get(TranslateService);
  const browserLang = translate.getBrowserLang() ?? 'fr';
  translate.setDefaultLang('fr'); // fallback
  await firstValueFrom(translate.use(browserLang));


  return appRef;
}

main().catch((err) => console.error(err));
