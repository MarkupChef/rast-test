import { FC } from 'react';
import { Question as QuestionType } from '../../data';
import AnswerList from '../AnswerList';
import H1 from '../H1';

interface QuestionProps {
  title: string;
  question: QuestionType;
  setAnswer: (answerID: number) => void;
}

const Question: FC<QuestionProps> = ({ title, question, setAnswer }) => {
  console.log('render question');

  return (
    <>
      <H1>{title}</H1>
      <p>Choose correct answer:</p>
      <AnswerList question={question} setAnswer={setAnswer} />
    </>
  );
};

export default Question;
