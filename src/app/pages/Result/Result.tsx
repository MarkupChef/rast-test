import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnswerList from '../../components/AnswerList';
import Counter from '../../components/Counter';
import Button from '../../components/UI/Button';
import H1 from '../../components/UI/H1';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { start } from '../../store/slice';

const Result = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const restart = () => dispatch(start());

  const { questions, started, finished } = useAppSelector((state) => state.test);

  useEffect(() => {
    if (!finished) {
      if (started) {
        navigate('/test');
      } else {
        navigate('/', { replace: true });
      }
    }
  }, []);

  const handleRestart = () => {
    restart();
    navigate('/test');
  };

  return (
    <div>
      <H1>Result</H1>
      <div className={'mb-4'}>
        <Counter result />
      </div>
      {
        <>
          <ul className={'flex flex-wrap justify-center gap-8 mb-6'}>
            {questions.map((question, i) => {
              return (
                <li key={i}>
                  <h4 className={'font-bold mb-2'}>
                    {++i}) {question.expression}
                  </h4>
                  <AnswerList question={question} result />
                </li>
              );
            })}
          </ul>
        </>
      }

      <Button onClick={handleRestart}>Restart</Button>
      <div>
        <Link to={'/'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Result;
