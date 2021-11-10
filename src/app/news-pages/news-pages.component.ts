import { Component, OnInit } from '@angular/core';
import {NewsService} from '../service/news.service'


@Component({
  selector: 'app-news-pages',
  templateUrl: './news-pages.component.html',
  styleUrls: ['./news-pages.component.scss']
})
export class NewsPagesComponent implements OnInit {

  constructor(private _services: NewsService) {}

  news:any = [];

  ngOnInit(): void {
    this._services.getNews().subscribe((news) => {
      this.news = news.articles;
    })
  }

}
