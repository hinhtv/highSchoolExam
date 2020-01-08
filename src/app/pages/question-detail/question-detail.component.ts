import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Category } from '../../Models';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
    public typeForm = '';
    categories: Category[];

    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.typeForm = localStorage.getItem('action');
        console.log(this.typeForm);
        localStorage.removeItem('action');
        if (this.typeForm === 'detail') {
            this.getQuestionById();
        }
        this.questionService.getCategories().subscribe(data => {
            this.categories = data;
            console.log('list categories', data);

            this.categories.unshift({
                id: '0',
                name: 'Select Category',
                active: true,
            });
        });
    }

    getQuestionById() {}
}
