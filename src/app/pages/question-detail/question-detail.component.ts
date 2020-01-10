import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Category, Difficult, Answer, Question } from '../../Models';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-question-detail',
    templateUrl: './question-detail.component.html',
    styleUrls: ['./question-detail.component.css'],
})
export class QuestionDetailComponent implements OnInit {
    public typeForm = '';
    question: Question;
    categories: Category[];
    questionDifficult: Difficult[];
    answers: Answer[];

    questionForm = this.fb.group({
        answerDescription: ['', Validators.required],
        answerFirst: ['', Validators.required],
        answerSecond: ['', Validators.required],
        answerThird: ['', Validators.required],
        answerFour: ['', Validators.required],
        categoryId: '1',
        correctPoint: ['', Validators.required],
        diffId: '1',
        questionContent: ['', Validators.required],
    });

    constructor(
        private questionService: QuestionService,
        private fb: FormBuilder,
        private router: Router,
        private activedRoutte: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activedRoutte.data.subscribe(data => {
            this.typeForm = data.action;
            if (this.typeForm === 'detail') {
                this.getQuestionById();
            }
        });
        this.questionService.getCategories().subscribe(data => {
            this.categories = data;
        });
        this.questionDifficult = this.questionService.questionDifficult;
        this.answers = this.questionService.answer;
    }

    getQuestionById() {}

    createQuestion() {
        if (this.questionForm.invalid) {
            this.questionForm.get('questionContent').markAsTouched();
            this.questionForm.get('answerFirst').markAsTouched();
            this.questionForm.get('answerSecond').markAsTouched();
            this.questionForm.get('answerThird').markAsTouched();
            this.questionForm.get('answerFour').markAsTouched();
            this.questionForm.get('correctPoint').markAsTouched();
            this.questionForm.get('answerDescription').markAsTouched();
        } else {
            this.question = this.questionForm.value;
            this.questionService
                .createQuestion(this.question)
                .subscribe(data => {
                    if (confirm('Do you want to create question continue?')) {
                        this.resetForm();
                    } else {
                        this.router.navigate(['/admin/question']);
                    }
                });
        }
    }

    resetForm() {
        this.questionForm.get('questionContent').reset();
        this.questionForm.get('answerFirst').reset();
        this.questionForm.get('answerSecond').reset();
        this.questionForm.get('answerThird').reset();
        this.questionForm.get('answerFour').reset();
        this.questionForm.get('correctPoint').reset();
        this.questionForm.get('answerDescription').reset();
    }
}
