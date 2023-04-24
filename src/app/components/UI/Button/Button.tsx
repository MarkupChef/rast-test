import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  type?: 'submit';
}

const Button: FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <button
      {...props}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-1 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      type={type ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
