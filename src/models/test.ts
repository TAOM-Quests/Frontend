export interface ITest {
  _id: string,
  title: string;
  tags: string[];
  group: string;
  difficult: string;
  results: IResult[];
  questions: IQuestion[];
}

interface IResult {
  title: string;
  description: string;
}

interface IQuestion {
  text: string;
  type: QuestionType;
  answers: string[];
  correctAnswer?: string;
}

type QuestionType = 'one' | 'many';
