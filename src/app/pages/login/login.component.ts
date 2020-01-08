import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passWorld: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.user = this.loginForm.value;
    this.userService.login(this.user).subscribe(data => {
      localStorage.setItem('passWord', data.passWorld);
      localStorage.setItem('userName', data.userName);
      localStorage.setItem('role', data.role.toString());
      console.log(data);
      this.router.navigate(['/admin']);
    });
  }
}
