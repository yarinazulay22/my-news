import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../utulity.service';
import { User } from './register.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  

  public user?: User ;

  register() {
    console.log(this.form.validator)
    const sub = this.http
      .post<User>('connect/register', this.form.value)
      .subscribe(() => {
        this.utility.alert('המשתמש נוסף בהצלחה!');
        this.utility.isLoggedIn=true;
        sub.unsubscribe();
        this.router.navigate(['']);
      });
  }

  constructor(
    private http: HttpService,
    private utility: UtilityService,
    private router: Router
  ) {}


  ngOnInit(): void { }

}