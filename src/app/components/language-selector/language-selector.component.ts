import {Component} from '@angular/core';
import {AppSettings} from '../../models/app-settings.model';
import {appSettings} from '../../app.settings';
import {TranslateService} from '@ngx-translate/core';
import {LanguageManagerService} from '../../services/language-manager.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {

  // TODO: Probably appSettings should be a class to have an instance accross app, instead of a file with an exported object.
  public appSettings: AppSettings = appSettings;

  constructor(private translate: TranslateService,
              private languageManagerService: LanguageManagerService) {
  }

  public changeLanguage(languageCode: string) {
    this.translate.use(languageCode);
    this.languageManagerService.saveLanguage(languageCode);
  }
}
