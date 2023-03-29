import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../home/home.interface';
import { HttpService } from '../http.service';
import { UtilityService } from '../utulity.service';
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']

})

export class NewCardComponent  implements OnInit {
  @Input() news: News | any;
  
  update(id: string) {
      this.router.navigate(['/update']);
      this.utility.newsIdToEdit=id;

  }

  delete(item:News) {
    const sub = this.http
    .delete<void>(`news/delete/${item}`)
      .subscribe(() => {
        window.location.reload()
        sub.unsubscribe();
      });
    
  }

  constructor(private route: ActivatedRoute,    private router: Router, public http: HttpService ,public utility:UtilityService){}

  ngOnInit(): void {
     const routeParams = this.route.snapshot.paramMap;
     const result = routeParams.get('newId');
     if(result){
      const id = +result;


      const sub = this.http.get<News[]>(`news/${id}`).subscribe(data => {
        this.news = data;
        sub.unsubscribe();
    });


     
  }
}
}
