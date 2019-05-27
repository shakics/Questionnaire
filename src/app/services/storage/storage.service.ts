import { Injectable, Inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(PLATFORM_ID) private platform: Object) { }
  getItem(key: string) {
    if (isPlatformBrowser(this.platform)) {
      return localStorage.getItem(key);
    }
  }

  setItem(key: string, value: string) {
    if (isPlatformBrowser(this.platform)) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string) {
    if (isPlatformBrowser(this.platform)) {
      localStorage.removeItem(key);
    }
  }

  clear() {
    if (isPlatformBrowser(this.platform)) {
      localStorage.clear();
    }
  }
}
