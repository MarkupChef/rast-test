import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../hooks/useGlobalContext';

const Result = () => {
  const navigate = useNavigate();
  const { questions } = useContext(GlobalContext);

  useEffect(() => {
    if (questions.index !== questions.questionsList.length - 1) {
      navigate('/test');
    }
  }, []);

  return (
    <div>
      <h1>Result</h1>
      {
        <ul>
          {questions.questionsList.map((question, index) => {
            return (
              <li key={index}>
                <h4>{question.expression}</h4>
                <ul>
                  {question.options.map((opt, i) => (
                    <li key={i}>
                      {i === question.answerIndex ? (
                        <span style={{ color: 'green' }}>{opt.toString()}</span>
                      ) : i === question.answerUserIndex && question.answerUserIndex !== question.answerIndex ? (
                        <span style={{ color: 'red' }}>{opt.toString()}</span>
                      ) : (
                        opt.toString()
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Result;
