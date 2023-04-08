import { FC } from 'react';
import { Question as QuestionType } from '../../data';
import AnswerList from '../AnswerList';
import H1 from '../H1';

interface QuestionProps {
  title: string;
  options: any[];
  checked: number;
  setAnswer: (answer: number) => void;
  question: QuestionType;
}

const Question: FC<QuestionProps> = ({ title, options, checked, setAnswer, question }) => {
  console.log('render question');

  return (
    <>
      <H1>{title}</H1>
      <p>Choose correct answer:</p>
      <AnswerList question={question} />
    </>
  );
};

export default Question;
