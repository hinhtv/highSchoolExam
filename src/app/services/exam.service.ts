import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
    Exam,
    ExamList,
    QuestionList,
    AnswerList,
    HistoryExam,
} from '../Models';
import { Observable } from 'rxjs';
import { Common } from '../Models/common';

@Injectable({
    providedIn: 'root',
})
export class ExamService {
    constructor(private http: HttpClient) {}

    createExam(exam: Exam) {
        return this.http.post<Exam>(Common.API + 'exam/create', exam);
    }

    getAllExamByCategoryId(id: string) {
        return this.http.get<ExamList[]>(
            Common.API + 'exam/getAllExamByCateId/' + id
        );
    }

    getExamDetailById(id: string): Observable<QuestionList[]> {
        return this.http.get<QuestionList[]>(
            Common.API + 'question/getByExam/' + id
        );
    }

    getAnswerbyQuestionId(id: string): Observable<AnswerList[]> {
        return this.http.get<AnswerList[]>(
            Common.API + 'question/getAnswers/' + id
        );
    }

    getAllHistory(): Observable<HistoryExam[]> {
        return this.http.get<HistoryExam[]>(Common.API + 'history/getAll');
    }
}
