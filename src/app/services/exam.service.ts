import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Exam } from '../Models';

const API = 'https://vinschoolexam.herokuapp.com/api/';

@Injectable({
    providedIn: 'root',
})
export class ExamService {
    httpHeader = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    constructor(private http: HttpClient) {}

    createExam(exam: Exam) {
        return this.http.post<Exam>(API + 'exam/create', exam, this.httpHeader);
    }
}
