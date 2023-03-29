import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoggedin } from '../app.component';
import { HttpService } from '../http.service';
import { UtilityService } from '../utulity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  // login() {
  //   debugger
  //   const sub = this.http
  //     .post<UserLoggedin>('login', this.form.value) 
  //     .subscribe((data) => {
  //       this.utility.user = data
  //       this.utility.alert('ההתחברות בוצעה בהצלחה!');
  //       sub.unsubscribe();
  //       this.router.navigate(['']);
  //     },error=>{
  //       debugger;
  //       console.log('Error in login');
  //     });
  // }

  login() {
    const sub = this.http
      .post<UserLoggedin>('connect/login' , this.form.value) 
      .subscribe((data) => {
        this.utility.user = data
        this.utility.alert('ההתחברות בוצעה בהצלחה!');
        this.utility.isLoggedIn=true;
        sub.unsubscribe();
        this.router.navigate(['']);
      });
  }
  constructor(
    private http: HttpService,
    private utility: UtilityService,
    private router: Router,
  ) { }

  
  ngOnInit(): void { }

}
