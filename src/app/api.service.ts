import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router }  from '@angular/router';

import { Observable, BehaviorSubject }     from 'rxjs';

@Injectable()
export class ApiService {

  public locale = new BehaviorSubject<any>(0)

  public localeObs = this.locale.asObservable()

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getLocale()
  {
    return this.localeObs
  }

  setLocale(locale: string)
  {
    if(!locale) {
      this.changeLocale('tr')

      return console.error('Locale is not defined')
    }
    console.log(locale)
    this.locale.next(locale)

    return locale
  }

  changeLocale(locale)
  {
    let url = this.router.url
    console.log(this.router)
    url = url.slice(3, url.length)

    this.router.navigate([locale + url])
  }

  navigate(link: Array<any>, options: any = {})
  {
    return this.router.navigate(link, options);
  }
}
