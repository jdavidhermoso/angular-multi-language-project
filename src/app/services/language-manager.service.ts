import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageManagerService {

  constructor() {
  }

  public getSavedLanguage() {
    return localStorage.getItem('language');
  }

  public saveLanguage(languageCode: string) {
    localStorage.setItem('language', languageCode);
  }
}
