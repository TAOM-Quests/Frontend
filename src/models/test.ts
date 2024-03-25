export interface ITest {
  _id: string,
  group: string;
  title: string;
  tags: string[];
  difficult: string;
  department: string;
  results: IResult[];
  description: string;
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
