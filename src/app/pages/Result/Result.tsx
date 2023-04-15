import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnswerList from '../../components/AnswerList';
import Button from '../../components/Button';
import Counter from '../../components/Counter';
import H1 from '../../components/H1';
import GlobalContext from '../../hooks/useGlobalContext';

const Result = () => {
  const navigate = useNavigate();
  const { questions, start } = useContext(GlobalContext);

  useEffect(() => {
    if (questions.index !== questions.questionsList.length - 1) {
      navigate('/test');
    }
  }, [questions]);

  return (
    <div>
      <H1>Result</H1>
      <div className={'mb-4'}>
        <Counter result />
      </div>
      {
        <>
          <ul className={'flex flex-wrap justify-center gap-8 mb-6'}>
            {questions.questionsList.map((question, index) => {
              return (
                <li key={index}>
                  <h4 className={'font-bold mb-2'}>
                    {index + 1}) {question.expression}
                  </h4>
                  <AnswerList question={question} result setAnswer={() => {}} />
                </li>
              );
            })}
          </ul>
        </>
      }

      <Button onClick={start}>Restart</Button>
      <div>
        <Link to={'/'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Result;
