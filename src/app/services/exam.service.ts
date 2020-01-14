import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Exam, ExamList, QuestionList } from '../Models';
import { Observable } from 'rxjs';

const API = 'http://highschoolexam.herokuapp.com/api/';

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

    getAllExamByCategoryId(id: string) {
        return this.http.get<ExamList[]>(API + 'exam/getAllExamByCateId/' + id);
    }

    getExamDetailById(id: string): Observable<QuestionList[]> {
        return this.http.get<QuestionList[]>(API + 'question/getByExam/' + id);
    }
}
