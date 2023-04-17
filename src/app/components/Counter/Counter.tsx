import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface CounterProps {
  result?: boolean;
}

const Counter: FC<CounterProps> = ({ result = false }) => {
  const { index, questions, finished } = useSelector((state: RootState) => state.test);

  const leftNum = finished
    ? questions.filter((question) => question.answerIndex === question.answerUserIndex).length
    : index + 1;

  return (
    <>
      {result && <span>Correct answers: </span>}
      {leftNum} / {questions.length}
    </>
  );
};

export default Counter;
