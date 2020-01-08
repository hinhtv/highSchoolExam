import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userWelcome = 'user';

  constructor() { }

  ngOnInit() {
    this.userWelcome = localStorage.getItem('userName');
  }

  logout() {
    localStorage.removeItem('passWord');
    localStorage.removeItem('userName');
  }
}
