export interface ITest {
  _id: string,
  title: string;
  description: string;
  tags: string[];
  group: string;
  difficult: string;
  results: IResult[];
  questions: IQuestion[];
}

export interface ITestDTO {
  title: string;
  tags: string[];
  group: string;
  difficult: string;
}

interface IResult {
  title: string;
  description: string;
}

export interface IQuestion {
  text: string;
  answers: string[];
  type: QuestionType;
  correctAnswer: string[];
  images?: string[];
  language?: string;
}

export type QuestionType = 'one' | 'many' | 'sorting' | 'link' | 'code' | 'free';
