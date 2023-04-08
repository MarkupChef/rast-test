import { createContext, SetStateAction, useState } from 'react';
import { QUESTIONS_STORE } from '../constants';
import { Question as QuestionType, questionList } from '../data';
import { shuffleArray } from '../utils/shuffleArray';

export interface QuestionState {
  index: number;
  questionsList: QuestionType[];
}

interface UseGlobalContext {
  questions: QuestionState;
  setQuestions: React.Dispatch<SetStateAction<QuestionState>>;
  restart: () => void;
}

function getNewQuestions() {
  return {
    index: 0,
    questionsList: shuffleArray(questionList),
  };
}

export const GlobalContextProvider = (props: any) => {
  const [questions, setQuestions] = useState<QuestionState>(() => {
    const state = localStorage.getItem(QUESTIONS_STORE);

    if (state) {
      return JSON.parse(state);
    }

    return getNewQuestions();
  });

  /*useLayoutEffect(() => {
    const state = localStorage.getItem(QUESTIONS_STORE);

    if (state) {
      console.log('store exist');
      setQuestions(JSON.parse(state));
    }
  }, []);*/

  const restart = () => {
    localStorage.removeItem(QUESTIONS_STORE);
    setQuestions(getNewQuestions());
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
