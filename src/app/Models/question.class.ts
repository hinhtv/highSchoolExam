export class Question {
    id: string;
    answerDescription: string;
    answerFirst: string;
    answerSecond: string;
    answerThird: string;
    answerFour: string;
    categoryId: number;
    correctPoint: number;
    diffId: number;
    questionContent: string;
}

export class QuestionList {
    id: string;
    content: string;
    active: boolean;
    category: string;
    diff: string;
    answerList: Answer[];
    correctAnswer: Answer;
    description: string;
}

export class Difficult {
    id: string;
    level: string;
}

export class Class {
    id: string;
    classname: string;
}

export class Answer {
    id: string;
    content: string;
}
