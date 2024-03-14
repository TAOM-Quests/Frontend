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
  type: QuestionType;
  answers: string[];
  correctAnswer?: string[];
  language?: string; 
}

type QuestionType = 'one' | 'many' | 'sorting' | 'code';
