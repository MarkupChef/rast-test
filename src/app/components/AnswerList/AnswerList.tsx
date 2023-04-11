import { FC } from 'react';
import { Question } from '../../data';
import useTest from '../../pages/Test/useTest';
import Answer from '../Answer';
import Radio from '../Radio/Radio';

interface AnswerListProps {
  question: Question;
  result?: boolean;
}

const AnswerList: FC<AnswerListProps> = ({ question, result = false }) => {
  const { setAnswer } = useTest();

  return (
    <ul className={'w-40 mx-auto'}>
      {question.options.map((opt, i) => (
        <li key={i} className={'mb-2 last:mb-0'}>
          {result ? (
            <>
              {i === question.answerIndex ? (
                <Answer correct>
                  <span>{opt.toString()}</span>
                </Answer>
              ) : i === question.answerUserIndex && question.answerUserIndex !== question.answerIndex ? (
                <Answer correct={false}>
                  <span>{opt.toString()}</span>
                </Answer>
              ) : (
                <Answer>{opt.toString()}</Answer>
              )}
            </>
          ) : (
            <Answer checked={i === question.answerUserIndex}>
              <Radio
                id={`answer-id-${i}`}
                name={'answer'}
                label={opt.toString()}
                value={i}
                checked={i === question.answerUserIndex}
                onChange={(e) => setAnswer(+e.target.value)}
              />
            </Answer>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;
