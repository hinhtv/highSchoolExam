import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Category, Difficult, Class } from '../../Models';
import { Router } from '@angular/router';

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
    categories: Category[];
    questionDifficult: Difficult[];
    classList: Class[];

    constructor(
        private questionsService: QuestionService,
        private router: Router
    ) {}

    ngOnInit() {
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

    createQuestion() {
        localStorage.setItem('action', 'create');
    }

    getQuestionById() {
        localStorage.setItem('action', 'detail');
    }

    deleteQuestionById() {
        if (confirm('Do you want to delete Question?')) {
            this.router.navigate(['/admin/question']);
        }
    }
}
