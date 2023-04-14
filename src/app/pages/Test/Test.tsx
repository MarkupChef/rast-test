import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import Question from '../../components/Question';
import GlobalContext from '../../hooks/useGlobalContext';
import useTest from './useTest';

const Test = () => {
  const { questions, start } = useContext(GlobalContext);
  const { setAnswer, handlePrev, handleSubmit } = useTest();

  const question = questions.questionsList[questions.index];

  console.log('render Test', questions);

  return (
    <>
      {questions.error ? (
        <>
          <h2 className={'mb-2'}>Error load questions</h2>
          <Link to={'/'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Home
          </Link>
        </>
      ) : question ? (
        <div>
          <Counter />
          <form onSubmit={handleSubmit}>
            <div className={'mb-6'}>
              <Question title={question.expression} question={question} setAnswer={setAnswer} />
            </div>
            `{questions.index > 0 && <Button onClick={handlePrev}>Prev</Button>}
            <Button type={'submit'}>Next</Button>
            <div
              className={'font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer'}
              onClick={start}
            >
              Restart
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Test;
