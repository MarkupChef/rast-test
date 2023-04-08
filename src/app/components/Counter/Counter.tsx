import { FC, useContext } from 'react';
import GlobalContext from '../../hooks/useGlobalContext';

interface CounterProps {
  result?: boolean;
}

const Counter: FC<CounterProps> = ({ result = false }) => {
  const { questions } = useContext(GlobalContext);

  const leftNum = result
    ? questions.questionsList.filter((question) => question.answerIndex === question.answerUserIndex).length
    : questions.index + 1;

  return (
    <>
      {result && <span>Correct answers: </span>}
      {leftNum} / {questions.questionsList.length}
    </>
  );
};

export default Counter;
