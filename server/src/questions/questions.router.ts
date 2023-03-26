/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as QuestionService from './questions.service';
import { Questions } from './questions.interface';

/**
 * Router Definition
 */

export const questionsRouter = express.Router();

/**
 * Controller Definitions
 */

//  @desc    Get all questions
//  @route   GET /api/v1/questions
//  @access  Public

questionsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const questions: Questions[] = await QuestionService.findAll();

    res.status(200).send(questions);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
});
