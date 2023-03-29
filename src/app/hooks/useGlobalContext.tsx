import { createContext, SetStateAction, useState } from 'react';
import { Question as QuestionType, questionList } from '../data';
import { shuffleArray } from '../Utils/shuffleArray';

export interface QuestionState {
  index: number;
  questionsList: QuestionType[];
}

interface UseGlobalContext {
  questions: QuestionState;
  setQuestions: React.Dispatch<SetStateAction<QuestionState>>;
  restart: () => void;
}

export const GlobalContextProvider = (props: any) => {
  const [questions, setQuestions] = useState<QuestionState>({
    index: 0,
    questionsList: shuffleArray(questionList),
  });

  const restart = () => {
    setQuestions({
      index: 0,
      questionsList: shuffleArray(questionList),
    });
  };

  const contextValue = {
    questions,
    setQuestions,
    restart,
  };

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>;
};

export const GlobalContext = createContext<UseGlobalContext>({
  questions: {
    index: 0,
    questionsList: [],
  },
  setQuestions: () => {},
  restart: () => {},
});

export default GlobalContext;
