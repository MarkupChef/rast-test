import { FC } from 'react';
import { Question } from '../../data';
import Answer from '../Answer';
import Radio from '../Radio/Radio';

interface AnswerListProps {
  question: Question;
  result?: boolean;
  setAnswer: (answerID: number) => void;
}

const AnswerList: FC<AnswerListProps> = ({ question, setAnswer, result = false }) => {
  console.log('AnswerList');

  return (
    <ul className={'w-40 mx-auto'}>
      {question.options.map((opt, i) => (
        <li key={i} className={'mb-2 last:mb-0'}>
          {result ? (
            <>
              {i === question.answerIndex ? (
                <Answer correct>
                  <div className={'py-3'}>{opt.toString()}</div>
                </Answer>
              ) : i === question.answerUserIndex && question.answerUserIndex !== question.answerIndex ? (
                <Answer correct={false}>
                  <div className={'py-3'}>{opt.toString()}</div>
                </Answer>
              ) : (
                <Answer>
                  <div className={'py-3'}>{opt.toString()}</div>
                </Answer>
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
