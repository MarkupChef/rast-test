import { createContext, SetStateAction, useState } from 'react';
import { QUESTIONS_STORE } from '../constants';
import { Question as QuestionType } from '../data';
import { shuffleArray } from '../utils/shuffleArray';

export interface QuestionState {
  index: number;
  questionsList: QuestionType[];
  error: Error | null;
  finished: boolean;
}

interface UseGlobalContext {
  questions: QuestionState;
  setQuestions: React.Dispatch<SetStateAction<QuestionState>>;
  start: () => void;
}

export const GlobalContextProvider = (props: any) => {
  const [questions, setQuestions] = useState<QuestionState>(() => {
    const state = localStorage.getItem(QUESTIONS_STORE);

    if (state) {
      console.log('effect local store');
      return JSON.parse(state);
    } else {
      return {
        index: 0,
        questionsList: [],
        error: null,
        finished: false,
      };
    }
  });

  async function getData(): Promise<void> {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();

      setQuestions({
        ...questions,
        index: 0,
        questionsList: shuffleArray(data),
        finished: false,
      });
    } catch (Err) {
      setQuestions({
        ...questions,
        error: Err as Error,
      });
    }
  }

  const start = () => {
    localStorage.removeItem(QUESTIONS_STORE);
    getData();
  };

  const contextValue = {
    questions,
    setQuestions,
    start,
  };

  return <GlobalContext.Provider value={contextValue}>{props.children}</GlobalContext.Provider>;
};

export const GlobalContext = createContext<UseGlobalContext>({
  questions: {
    index: 0,
    questionsList: [],
    error: null,
    finished: false,
  },
  setQuestions: () => {},
  start: () => {},
});

export default GlobalContext;
