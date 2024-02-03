export interface ISearch {
  search: ISearchParams[];
}

interface ISearchParams {
  field: string;
  operator: OperatorTypes;
  value: object | string | number;
}

type OperatorTypes = 'eq' | 'neq' | 'gt' | 'lt';
