import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../Models/category.class';
import { Observable } from 'rxjs';

const API = 'https://vinschoolexam.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<Category[]>(API + 'category/getAll');
  }
}
