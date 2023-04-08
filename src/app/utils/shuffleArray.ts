import { Question } from '../data';

export const shuffleArray = (array: Question[]): [] => {
  const newArray = JSON.parse(JSON.stringify(array));

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};
