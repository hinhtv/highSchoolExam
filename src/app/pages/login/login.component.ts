import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../Models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public check = false;
    user: User;

    loginForm = this.fb.group({
        userName: ['', Validators.required],
        passWorld: ['', Validators.required],
    });

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit() {}

    login() {
        this.checkLogin();
        if (!this.check) {
            this.user = this.loginForm.value;
            this.userService.login(this.user).subscribe(data => {
                if (data !== null) {
                    localStorage.setItem('passWord', data.passWorld);
                    console.log('pass', localStorage.getItem('passWord'));
                    localStorage.setItem('userName', data.userName);
                    localStorage.setItem('role', data.role.toString());
                    this.router.navigate(['/admin']);
                } else {
                    this.check = true;
                }
            });
        } else {
            this.check = true;
        }
    }

    checkLogin() {
        this.check =
            this.loginForm.get('userName').invalid ||
            this.loginForm.get('passWorld').invalid;
    }
}
