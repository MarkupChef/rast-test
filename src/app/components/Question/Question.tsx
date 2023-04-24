import { FC } from 'react';
import { Question as QuestionType } from '../../types';
import AnswerList from '../AnswerList';
import H1 from '../H1';

interface QuestionProps {
  title: string;
  question: QuestionType;
}

const Question: FC<QuestionProps> = ({ title, question }) => {
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
