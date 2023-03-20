//  src/questions/questions.service.ts

/**
 * Data Model Interfaces
 */

import { Question, Questions, QuestionWithAnswer } from './questions.interface';

/**
 * In-Memory Store
 */

const questions: QuestionWithAnswer = {
  1: {
    id: 1,
    question: 'What is the capital of France?',
    category: 'Geography',
    correctAnswer: 'Paris',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
  },
  2: {
    id: 2,
    category: 'Geography',
    question: 'Where would you find the city of Skopje?',
    correctAnswer: 'Macedonia',
    answers: ['London', 'France', 'Greece', 'Macedonia'],
  },
  3: {
    id: 3,
    category: 'Movies',
    question: 'Which director directed Batman Begins?',
    correctAnswer: 'Christopher Nolan',
    answers: [
      'Christopher Nolan',
      'Steven Spielberg',
      'Quentin Tarantino',
      'James Cameron',
    ],
  },
  4: {
    id: 4,
    category: 'Music',
    question:
      "Which Australian hard rock band released the studio album 'Back in Black'?",
    correctAnswer: 'AC/DC',
    answers: ['AC/DC', 'Metallica', "Guns N' Roses", 'Bon Jovi'],
  },

  5: {
    id: 5,
    category: 'Science',
    question: 'What is the chemical formula for water?',
    correctAnswer: 'H2O',
    answers: ['H2O', 'CO2', 'CH4', 'NH3'],
  },
  6: {
    id: 6,
    category: 'Geography',
    question: 'What is the second largest state in the USA?',
    correctAnswer: 'Texas',
    answers: ['California', 'Texas', 'New York', 'Florida'],
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Questions[]> =>
  Object.values(questions);
