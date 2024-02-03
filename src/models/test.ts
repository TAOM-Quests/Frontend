export interface ITest {
  title: string;
  tags: string[];
  group: string;
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
