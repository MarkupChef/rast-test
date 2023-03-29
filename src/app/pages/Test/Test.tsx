import { useContext } from 'react';
import Counter from '../../components/Counter';
import Question from '../../components/Question';
import GlobalContext from '../../hooks/useGlobalContext';
import useTest from './useTest';

const Test = () => {
  const { question, setAnswer, handlePrev, handleSubmit } = useTest();
  const { restart } = useContext(GlobalContext);

  return (
    <div>
      <h1>Test</h1>
      <Counter />

      <form onSubmit={handleSubmit}>
        <Question
          title={question.expression}
          options={question.options}
          checked={question.answerUserIndex}
          setAnswer={setAnswer}
        />
        <button type={'button'} onClick={handlePrev}>
          Prev
        </button>
        <button type={'submit'}>Next</button>
        <br />
        <button type={'button'} onClick={restart}>
          Restart
        </button>
      </form>
    </div>
  );
};

export default Test;
