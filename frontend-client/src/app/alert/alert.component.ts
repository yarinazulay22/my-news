import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utulity.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  constructor(public utility: UtilityService) { }
  public alertActive = false;

  closeAlert(){
    this.utility.alertActive.next(false) ;
  }
  ngOnInit() {
    this.utility.alertActive.asObservable().subscribe(value=>this.alertActive=value);
  }

}
