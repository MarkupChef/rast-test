import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question as QuestionType } from '../../data';
import GlobalContext from '../../hooks/useGlobalContext';

const useTest = () => {
  const navigate = useNavigate();
  const { questions, setQuestions, restart } = useContext(GlobalContext);

  console.log('questions', questions);

  const question = questions.questionsList[questions.index];

  const setAnswer = (answerID: number): void => {
    const i = questions.index;

    const newArr: QuestionType[] = questions.questionsList.map((item, index) => {
      if (index === i) {
        item.answerUserIndex = answerID;
        return item;
      }

      return item;
    });

    setQuestions({
      ...questions,
      questionsList: [...newArr],
    });
  };

  const handlePrev = () => {
    const i = questions.index;

    if (i > 0) {
      setQuestions({
        ...questions,
        index: i - 1,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const i = questions.index;

    if (i < questions.questionsList.length - 1) {
      setQuestions({
        ...questions,
        index: i + 1,
      });
    } else {
      navigate('/result');
    }
  };

  return {
    questions,
    question,
    setAnswer,
    handlePrev,
    handleSubmit,
    restart,
  };
};

export default useTest;
