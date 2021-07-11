import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  model: User = new User();
  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // if (this.accountService.isLoggedIn()) {
    //   this.router.navigate(['products']);
    // }
  }
  login(form: NgForm) {
    this.accountService.login(this.model);

    console.log(this.model.userName)
    console.log(this.model.password)
    console.log(this.accountService.isLoggedIn())

  }
  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
}
