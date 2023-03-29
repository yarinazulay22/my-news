import { Component, OnInit } from '@angular/core';
import { News } from './home.interface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public news: News[] = [];
  newNews: News = {
    id: 1,
    title: '',
    body: '',
    author: '',
    time:'',
  }

constructor(private http: HttpService) { }



ngOnInit() {
    const sub = this.http.get<News[]>("news/getShortNews").subscribe(data => {
        this.news = data;
        sub.unsubscribe();
    });
}

}

