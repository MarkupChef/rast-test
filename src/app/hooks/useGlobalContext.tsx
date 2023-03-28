import { createContext, SetStateAction, useState } from 'react';
import { Question as QuestionType, questionList } from '../data';
import { shuffleArray } from '../Utils/shuffleArray';

export interface QuestionState {
  index: number;
  questionsList: QuestionType[];
  checked: boolean;
}

interface UseGlobalContext {
  questions: QuestionState;
  setQuestions: React.Dispatch<SetStateAction<QuestionState>>;
}

export const GlobalContextProvider = (props: any) => {
  const [questions, setQuestions] = useState<QuestionState>({
    index: 0,
    questionsList: shuffleArray(questionList),
    checked: false,
  });

  const contextValue = {
    questions,
    setQuestions,
  };

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>;
};

export const GlobalContext = createContext<UseGlobalContext>({
  questions: {
    index: 0,
    questionsList: [],
    checked: false,
  },
  setQuestions: () => {},
});

export default GlobalContext;
