import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = [];
  login;
  localName;
  userName;
  password;
  constructor(public loginService: LoginService, private router: Router) {
    // console.log(loginService);
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.loginService.getUsers().subscribe((res) => {
      // this.user.push(res);
      this.login = res;

      // console.log(res);
    });
  }
  submitForm(form: NgForm) {
    console.log(form.value.userName);
    this.loginService.postUsers(form.value).subscribe((res) => {
      // console.log(res);
      if (res['err_code'] == 200) {
        console.log('success login');
        this.router.navigate(['/dashboard']);
        localStorage.removeItem('levels');
        localStorage.setItem('levels',JSON.stringify(res['data'] ));
      } else {
        alert('Not a valid User');
        console.log('invalid Users');
      }
      // this.router.navigate(['/dashboard']);
    });

  }
}
