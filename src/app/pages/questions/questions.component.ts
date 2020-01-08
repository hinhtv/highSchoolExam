import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  selectedCategory = 0;
  searchByQuestion = '';

  constructor() { }

  ngOnInit() {
  }

  refresh() {
    this.searchByQuestion = '';
    this.selectedCategory = 0;
  }

  createQuestion() {
    localStorage.setItem('action', 'create');
  }

  getQuestionById() {
    localStorage.setItem('action', 'detail');
  }
}
