import { FC } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setAnswer } from '../../store/slice';
import { Question } from '../../types';
import Answer from '../Answer';
import Radio from '../UI/Radio/Radio';

interface AnswerListProps {
  question: Question;
  result?: boolean;
}

const AnswerList: FC<AnswerListProps> = ({ question, result = false }) => {
  const dispatch = useAppDispatch();

  console.log('AnswerList');

  return (
    <ul className={'w-40 mx-auto'}>
      {question.options.map((opt, i) => (
        <li key={`answer-id-${i}`} className={'mb-2 last:mb-0'}>
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
                onChange={(e) => dispatch(setAnswer({ answerIndex: +e.target.value }))}
              />
            </Answer>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;
