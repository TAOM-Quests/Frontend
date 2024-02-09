import { ITestDTO } from "./test";

export interface IResult {
    test: ITestDTO;
    answers: IAnswer[];
}

export interface IAnswer {
    type: string;
    answer: string | string[]
}
