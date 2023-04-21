import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import Question from '../../components/Question';
import { AppDispatch, RootState } from '../../store';
import { fetchQuestions, nextQuestion, prevQuestion } from '../../store/slice';

const Test = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const next = () => dispatch(nextQuestion());
  const prev = () => dispatch(prevQuestion());
  const restart = () => dispatch(fetchQuestions());

  const { index, questions, status, started, finished, error } = useSelector((state: RootState) => state.test);
  const question = questions.length && questions[index];

  useEffect(() => {
    if (!started) {
      navigate('/');
    }

    if (started && !question) {
      dispatch(fetchQuestions());
    }
  }, []);

  useEffect(() => {
    if (finished) {
      navigate('/result');
    }
  }, [finished]);

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    next();
  };

  console.log('render Test');

  return (
    <>
      {error ? (
        <>
          <h2 className={'mb-2'}>Error load questions</h2>
          <Link to={'/'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Home
          </Link>
        </>
      ) : status === 'finished' && question ? (
        <div>
          <Counter />
          <form onSubmit={handleNext}>
            <div className={'mb-6'}>
              <Question title={question.expression} question={question} />
            </div>
            `{index > 0 && <Button onClick={prev}>Prev</Button>}
            <Button type={'submit'}>Next</Button>
            <br />
            <Button onClick={restart}>Restart</Button>
            <div>
              <Link to={'/'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Home
              </Link>
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
