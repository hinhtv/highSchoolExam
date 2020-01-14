import { Component, OnInit } from '@angular/core';
import { QuestionList } from 'src/app/Models';
import { ExamService } from 'src/app/services/exam.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-exam-detail',
    templateUrl: './exam-detail.component.html',
    styleUrls: ['./exam-detail.component.css'],
})
export class ExamDetailComponent implements OnInit {
    examDetail: QuestionList[];

    constructor(
        private examService: ExamService,
        private activatedRoute: ActivatedRoute,
        private spinner: NgxSpinnerService
    ) {}

    ngOnInit() {
        this.getExamDetailById();
    }

    getExamDetailById() {
        this.spinner.show();
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.examService.getExamDetailById(id).subscribe(data => {
            this.examDetail = data;
            this.spinner.hide();
        });
    }
}
