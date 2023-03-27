import { FC } from 'react';

interface QuestionProps {
  title: string;
  options: any[];
  checked: number;
  setAnswer: (answer: number) => void;
}

const Question: FC<QuestionProps> = ({ title, options, checked, setAnswer }) => {
  console.log('render question');

  return (
    <div>
      <h2>{title}</h2>
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
