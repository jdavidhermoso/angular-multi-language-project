import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageManagerService} from './services/language-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private languageManagerService: LanguageManagerService) {
    const savedLanguage = this.languageManagerService.getSavedLanguage();
    this.translate.setDefaultLang('en');

    if (savedLanguage) {
      this.translate.use(savedLanguage);
    }
  }
}
