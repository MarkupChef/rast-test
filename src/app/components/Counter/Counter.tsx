import { FC } from 'react';
import useAppSelector from '../../hooks/useAppSelector';

interface CounterProps {
  result?: boolean;
}

const Counter: FC<CounterProps> = ({ result = false }) => {
  const { index, questions, finished } = useAppSelector((state) => state.test);

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
