import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Class, Category, Difficult } from 'src/app/Models';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-exams',
    templateUrl: './exams.component.html',
    styleUrls: ['./exams.component.css'],
})
export class ExamsComponent implements OnInit {
    public selectedCategory = '0';
    public selectedDifficult = '0';
    public selectedClass = '0';
    public searchByExam = '';
    classList: Class[];
    categories: Category[];
    difficultList: Difficult[];

    constructor(
        private questionService: QuestionService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit() {
        this.spinner.show();
        this.questionService.getClass().subscribe(data => {
            this.classList = data;
        });
        this.questionService.getCategories().subscribe(data => {
            this.categories = data;
            this.spinner.hide();
        });
        this.difficultList = this.questionService.questionDifficult;
    }

    deleteExamById() {
        if (confirm('Do you want to delete Exam?')) {
            this.router.navigate(['/admin/exams']);
        }
    }

    refresh() {
        this.searchByExam = '';
        this.selectedCategory = '0';
        this.selectedDifficult = '0';
        this.selectedClass = '0';
    }
}
