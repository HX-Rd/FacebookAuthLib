import { Component, OnInit } from '@angular/core';
import { FacebookAuthService } from 'facebook-auth-lib';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(
    private facebookService: FacebookAuthService
  ) { }

  ngOnInit() {
    console.log(this.facebookService.getUserInfo());
  }
}
