import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Class, Category } from 'src/app/Models';

@Component({
    selector: 'app-exam-create',
    templateUrl: './exam-create.component.html',
    styleUrls: ['./exam-create.component.css'],
})
export class ExamCreateComponent implements OnInit {
    classList: Class[];
    categories: Category[];

    constructor(private questionService: QuestionService) {}

    ngOnInit() {
        this.questionService.getClass().subscribe(data => {
            this.classList = data;
            this.getCategoryByClassId(this.classList[0].id);
        });
    }

    getCategoryByClassId(id: string) {
        this.questionService.getCategoriesByClassId(id).subscribe(data => {
            this.categories = data;
        });
    }
}
