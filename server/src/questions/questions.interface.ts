//  src/questions/question.interface.ts

export interface Questions {
  id?: number;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
}



export interface Question {
  [key: number]: Questions;
}
