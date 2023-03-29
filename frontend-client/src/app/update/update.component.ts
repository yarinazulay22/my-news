import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoggedin } from '../app.component';
import { News } from '../home/home.interface';
import { HttpService } from '../http.service';
import { UtilityService } from '../utulity.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent {
  constructor(
    private http: HttpService,
    public utility: UtilityService,
    private router: Router
    ) { }


    form: FormGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      author: new FormControl(''),
      image: new FormControl(''),
    });


  public news: News[] = [];
  newNews: News = {
    id: 1,
    title: '',
    body: '',
    author: '',
    time:'',
  }

  isValid() {
    return Boolean(
        this.newNews.title &&
        this.newNews.body &&
        this.newNews.author 
    );
}

  add() {

    const sub = this.http.post<News>("news", this.form.value).subscribe( (data:News) => {
        this.news.unshift(data);

        this.newNews = {
            id: 1,
            title: '',
            body: '',
            author: '',
            time:'',
        };

        this.utility.alert('The News has been successfully added!');
        sub.unsubscribe();
        this.router.navigate(['']);
    });
}

submit(id: number){
  let currentNews = this.news.find((n)=> {return n.id === id});
  console.log(currentNews);
  




  /* const data = this.form.value;
  
  const sub = this.http.put<News>("news", data)
  .subscribe((data: any) => {
    this.utility.alert('The News has been successfully updated!');
    sub.unsubscribe();
    this.router.navigate(['']);
  }
  ) */
}


ngOnInit(): void {
  console.log(this.utility.user?.userName)
  console.log(this.utility.newsIdToEdit)
}
}
