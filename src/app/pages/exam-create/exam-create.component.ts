import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Class, Category, Exam } from 'src/app/Models';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder } from '@angular/forms';
import { ExamService } from 'src/app/services/exam.service';

@Component({
    selector: 'app-exam-create',
    templateUrl: './exam-create.component.html',
    styleUrls: ['./exam-create.component.css'],
})
export class ExamCreateComponent implements OnInit {
    classList: Class[];
    categories: Category[];
    exam: Exam;

    examForm = this.fb.group({
        cateId: '',
        examName: '',
        mockExam: 'true',
        typeId: '1',
    });

    constructor(
        private questionService: QuestionService,
        private examService: ExamService,
        private spinner: NgxSpinnerService,
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.spinner.show();
        this.questionService.getClass().subscribe(data => {
            this.classList = data;
            this.getCategoryByClassId(this.classList[0].id);
        });
    }

    getCategoryByClassId(id: string) {
        this.spinner.show();
        this.questionService.getCategoriesByClassId(id).subscribe(data => {
            this.categories = data;
            this.examForm.get('cateId').setValue(this.categories[0].id);
            this.spinner.hide();
        });
    }

    createExam() {
        this.spinner.show();
        this.exam = this.examForm.value;
        this.examService.createExam(this.exam).subscribe(data => {
            console.log(this.exam);
            console.log('data', data);
            this.spinner.hide();
        });
    }
}
