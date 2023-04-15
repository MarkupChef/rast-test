export interface Question {
  id: number;
  expression: string;
  answerIndex: number;
  answerUserIndex: number;
  options: any[];
}

/*export const questionList: Question[] = [
  { id: 1, expression: '1 + "2"', answerIndex: 1, answerUserIndex: 0, options: [3, '"12"', 'NaN', false] },
  { id: 2, expression: 'true + true', answerIndex: 0, answerUserIndex: 0, options: [2, true, '"2"', false] },
  {
    id: 3,
    expression: 'true + "true"',
    answerIndex: 1,
    answerUserIndex: 0,
    options: ['"true"', '"truetrue"', 2, true],
  },
  { id: 4, expression: 'true + "2"', answerIndex: 3, answerUserIndex: 0, options: ['NaN', true, 2, '"true2"'] },
  { id: 5, expression: '"2" + []', answerIndex: 2, answerUserIndex: 0, options: [3, '"2[]"', '"2"', 'NaN'] },
  { id: 6, expression: '[] - 2', answerIndex: 3, answerUserIndex: 0, options: ['NaN', -1, 0, -2] },
  { id: 7, expression: '3 * [1, 2, 3]', answerIndex: 0, answerUserIndex: 0, options: ['NaN', 3, false, 0] },
  {
    id: 8,
    expression: 'NaN + [1, 2, 3]',
    answerIndex: 1,
    answerUserIndex: 0,
    options: ['[1,2,3]', '"NaN1,2,3"', 'NaN', 123],
  },
  { id: 9, expression: 'NaN + "2"', answerIndex: 3, answerUserIndex: 0, options: ['"12"', 'NaN', 3, '"NaN2"'] },
  { id: 10, expression: 'NaN + ""', answerIndex: 1, answerUserIndex: 0, options: [1, '"NaN"', '""', 'NaN'] },
];*/
