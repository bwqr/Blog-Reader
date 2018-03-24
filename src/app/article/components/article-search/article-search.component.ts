import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms'

import { ArticleRequestService }   from '../../services/article-request.service'

import { HelpersService } from '../../imports'

import { Subscription, BehaviorSubject} from 'rxjs'

 @Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.sass']
})
export class ArticleSearchComponent implements OnInit {

  search_results: any

  subs = new Subscription()

  query_param: BehaviorSubject<any> = new BehaviorSubject<any>("")

  query: string = ""

  locale: string = ""

  IMAGE_URL: string = "";

  constructor(
    private articleRequestService: ArticleRequestService,
    private helpersService: HelpersService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.IMAGE_URL = this.articleRequestService.makeUrl('image.image');
  }

  ngOnInit() {

    let rq2 = this.helpersService.listenLocale().subscribe( locale => {
                this.locale = locale
                // this.locale = this.locale === "" ? locale : this.locale
                //
                // if(this.locale !== locale)
                //   this.search(this.query)
                //
                // this.locale = locale
              })

    let rq1 = this.activatedRoute.queryParams
                .switchMap( (params: Params) => [params['q']])
                .subscribe( response => {
                   this.search(response)

                   this.query = response
                 })

    this.subs.add(rq1); this.subs.add(rq2)
  }

  ngOnDestroy()
  {
    this.subs.unsubscribe()
  }

  search(query: string)
  {
    if(query === "") return

    this.search_results = null

    let rq1 = this.articleRequestService.getArticleSearch(query).subscribe( response => {
                this.search_results = response
                rq1.unsubscribe()
              })
  }

  navigate(query: string)
  {
    this.helpersService.navigate([this.helpersService.getLocale() + '/search'], { queryParams: { q: query}})
  }
}
