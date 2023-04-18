import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { questionsRouter } from './questions/questions.router';
import { errorMiddleware } from './middleware/error.middleware';
import { notFoundMiddleware } from './middleware/not-found.middleware';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt((process.env.PORT || 3030) as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/api/v1/questions', questionsRouter);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
