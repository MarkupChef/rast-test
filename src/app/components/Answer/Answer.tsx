import { FC } from 'react';

interface AnswerProps {
  correct?: boolean;
  children: any;
  checked?: boolean;
}

const Answer: FC<AnswerProps> = ({ correct, children, checked, ...props }) => {
  let bgColor = correct !== undefined ? (correct ? 'bg-green-200' : 'bg-red-200') : '';

  if (checked) {
    bgColor = 'bg-white';
  }

  return (
    <div
      className={`px-3 border bg-gray-200 rounded border-gray-200 shadow-[rgba(0,_0,_0,_0.15)_0px_3px_5px] ${bgColor}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Answer;
