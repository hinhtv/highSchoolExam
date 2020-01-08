import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Models/user.class';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedRole = 0;
  searchByName = '';
  newEn = '';
  users: User[];
  userRole = this.userService.userRole;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userRole.unshift({id: 0, role: 'Select Role'});
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  createUser() {
    localStorage.setItem('action', 'create');
    this.userRole.shift();
  }

  getUserById() {
    localStorage.setItem('action', 'detail');
    this.userRole.shift();
  }

  refresh() {
    this.searchByName = '';
    this.selectedRole = 0;
  }

  getRole(newValue: string) {
    console.log(newValue.substring(newValue.lastIndexOf(':') + 2));
  }
}
