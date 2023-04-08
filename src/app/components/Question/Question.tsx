import { FC } from 'react';
import { Question as QuestionType } from '../../data';
import AnswerList from '../AnswerList';
import H1 from '../H1';

interface QuestionProps {
  title: string;
  options: any[];
  checked: number;
  setAnswer: (answer: number) => void;
  question: QuestionType;
}

const Question: FC<QuestionProps> = ({ title, options, checked, setAnswer, question }) => {
  console.log('render question');

  return (
    <div>
      <h2>{title}</h2>
      <p>Choose correct answer:</p>
      <ul>
        {options.map((opt, i) => (
          <li key={`answer-${i}`}>
            <label>
              <input
                type="radio"
                name={'answer'}
                value={i}
                checked={i === checked}
                onChange={(e) => setAnswer(+e.target.value)}
              />{' '}
              {opt.toString()}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
