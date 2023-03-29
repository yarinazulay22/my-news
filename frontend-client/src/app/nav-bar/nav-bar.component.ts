import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../utulity.service';
import { Menu } from './nav-bar.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  menu: Menu[] = [
    {route:'/' , title:'Home'},
    {route:'/about' , title:'About'},
    {route:'/contact' , title:'Contact'},
  ]

  logout() {
    const sub = this.http.get<void>("connect/logout").subscribe(() => {
        this.utility.user = undefined;
        this.utility.isLoggedIn=false;
        sub.unsubscribe();
        this.router.navigate(['']);
    });
}


  constructor(public utility: UtilityService , private http: HttpService, private router: Router){}

  ngOnInit(): void {
  }
}




