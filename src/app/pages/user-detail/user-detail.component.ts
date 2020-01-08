import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
    typeForm = '';
    user: User;

    userRole = this.userService.userRole;

    userForm = this.fb.group({
        fullName: ['', Validators.required],
        userName: ['', Validators.required],
        passWorld: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        role: '1',
        active: 'true',
    });

    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private activedRoutte: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.typeForm = localStorage.getItem('action');
        console.log(this.typeForm);
        localStorage.removeItem('action');
        if (this.typeForm === 'detail') {
            this.getUserById();
        }
    }

    createUser() {
        this.user = this.userForm.value;
        console.log(this.user);
        this.userService.createUser(this.user).subscribe();
    }

    getUserById() {
        const id = this.activedRoutte.snapshot.paramMap.get('id');
        this.userService.getUserById(id).subscribe(data => {
            console.log('Detail: ' + data);
            console.log(data);
            data.role = this.passRole(data.role.toString());
            this.userForm.patchValue(data);
        });
    }

    updateUser() {
        const id = this.activedRoutte.snapshot.paramMap.get('id');
        this.user = this.userForm.value;
        this.user.passWorld = localStorage.getItem('passWord');
        this.user.userName = localStorage.getItem('userName');
        this.userService.updateUser(id, this.user).subscribe(data => {
            console.log('updated: ' + data);
        });
    }

    passRole(role: string) {
        if (role === 'Admin') {
            return 1;
        } else if (role === 'Student') {
            return 2;
        } else {
            return 3;
        }
    }
}
