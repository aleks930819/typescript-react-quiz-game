//  src/questions/question.interface.ts

export interface Questions {
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}

export interface Question extends Questions {
  id: number;
}

export interface QuestionWithAnswer {
  [key: number]: Question;
}
