import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'


@Component({
  selector: 'app-news-pages',
  templateUrl: './news-pages.component.html',
  styleUrls: ['./news-pages.component.scss']
})
export class NewsPagesComponent implements OnInit {

  constructor(private _services: NewsapiservicesService) {}

  news:any = [];

  ngOnInit(): void {
    this._services.newsPages().subscribe((news) => {
      this.news = news.articles;
    })
  }

}
