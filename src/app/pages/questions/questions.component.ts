import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import {
    Category,
    Difficult,
    Class,
    Question,
    QuestionList,
} from '../../Models';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
    public selectedCategory = '0';
    public selectedDifficult = '0';
    public selectedClass = '0';
    public searchByQuestion = '';
    questions: QuestionList[];
    categories: Category[];
    questionDifficult: Difficult[];
    classList: Class[];

    constructor(
        private questionsService: QuestionService,
        private router: Router,
        private spinner: NgxSpinnerService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.spinner.show();
        this.getQuestionByCategoryId();
        this.questionDifficult = this.questionsService.questionDifficult;
        this.questionsService.getCategories().subscribe(data => {
            this.categories = data;
        });
        this.questionsService.getClass().subscribe(data => {
            this.classList = data;
        });
    }

    refresh() {
        this.searchByQuestion = '';
        this.selectedCategory = '0';
        this.selectedDifficult = '0';
        this.selectedClass = '0';
    }

    deleteQuestionById() {
        if (confirm('Do you want to delete Question?')) {
            this.router.navigate(['/admin/question']);
        }
    }

    getQuestionByCategoryId() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.questionsService.getquestionByCategoryId(id).subscribe(data => {
            this.questions = data;
            this.questions.forEach(question => {
                this.categories.forEach(category => {
                    if (category.id === question.category) {
                        question.category = category.name;
                    }
                });
            });
            console.log(this.questions);
            this.spinner.hide();
        });
    }
}
