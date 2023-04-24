import { FC } from 'react';

interface H1Props {
  children: any;
}

const H1: FC<H1Props> = ({ children }) => {
  return <h1 className={'text-3xl font-bold p-3'}>{children}</h1>;
};

export default H1;
