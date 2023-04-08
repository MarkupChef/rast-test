import { ChangeEvent, FC } from 'react';

interface RadioProps {
  id: string;
  name: string;
  label: string;
  value: string | number;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Radio: FC<RadioProps> = ({ id, name, value, label, checked, onChange, ...props }) => {
  return (
    <div className="flex items-center text-left">
      <input
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id} className="ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};

export default Radio;
