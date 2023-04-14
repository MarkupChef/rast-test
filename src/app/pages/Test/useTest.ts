import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTIONS_STORE } from '../../constants';
import { Question as QuestionType } from '../../data';
import GlobalContext from '../../hooks/useGlobalContext';

const useTest = () => {
  const navigate = useNavigate();
  const { questions, setQuestions } = useContext(GlobalContext);

  /*async function getData(): Promise<void> {
    try {
      const response = await fetch('./data.json');
      const data = await response.json();

      setQuestions({
        ...questions,
        index: 0,
        questionsList: shuffleArray(data),
      });
    } catch (Err) {
      setQuestions({
        ...questions,
        error: Err as Error,
      });
    }
  }

  useLayoutEffect(() => {
    const state = localStorage.getItem(QUESTIONS_STORE);

    if (state) {
      console.log('effect local store');
      setQuestions(JSON.parse(state));
    } else {
      console.log('effect getData');
      getData();
    }
  }, []);*/

  useEffect(() => {
    if (questions.finished) {
      navigate('/result');
    }
  }, []);

  const setAnswer = (answerID: number): void => {
    const i = questions.index;

    const newArr: QuestionType[] = questions.questionsList.map((item, index) => {
      if (index === i) {
        item.answerUserIndex = answerID;
        return item;
      }

      return item;
    });

    const q = {
      ...questions,
      questionsList: [...newArr],
    };

    setQuestions(q);

    localStorage.setItem(QUESTIONS_STORE, JSON.stringify(q));
  };

  const handlePrev = () => {
    const i = questions.index;

    if (i > 0) {
      const q = {
        ...questions,
        index: i - 1,
      };
      setQuestions(q);

      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(q));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const i = questions.index;

    if (i < questions.questionsList.length - 1) {
      const q = {
        ...questions,
        index: i + 1,
      };

      setQuestions(q);

      localStorage.setItem(QUESTIONS_STORE, JSON.stringify(q));
    } else {
      setQuestions({
        ...questions,
        finished: true,
      });
      navigate('/result');
    }
  };

  console.log('useTest');

  return {
    setAnswer,
    handlePrev,
    handleSubmit,
  };
};

export default useTest;
