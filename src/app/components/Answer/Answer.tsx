import { FC } from 'react';

interface AnswerProps {
  correct?: boolean;
  children: any;
}

const Answer: FC<AnswerProps> = ({ correct, children, ...props }) => {
  const bgColor = correct !== undefined ? (correct ? 'bg-green-200' : 'bg-red-200') : '';

  return (
    <div
      className={`p-3 border bg-gray-200 rounded border-gray-200 shadow-[rgba(0,_0,_0,_0.15)_0px_3px_5px] ${bgColor}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Answer;
