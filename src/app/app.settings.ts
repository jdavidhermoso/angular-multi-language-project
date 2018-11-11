import {AppSettings} from './models/app-settings.model';
import {Language} from './models/language.model';

const defaultLanguage: Language = {
  code: 'en',
  key: 'english'
};

export const appSettings: AppSettings = {
  defaultLanguage: defaultLanguage,
  languages: [
    defaultLanguage,
    {
      code: 'es',
      key: 'spanish'
    }
  ]
};
