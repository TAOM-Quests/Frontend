export interface ITest {
  title: string;
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
  correctAnswer?: string;
}

type QuestionType = 'one' | 'many';
