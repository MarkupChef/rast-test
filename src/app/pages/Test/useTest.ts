import { useState } from 'react';
import { Question as QuestionType, questionList } from '../../data';
import { shuffleArray } from '../../Utils/shuffleArray';

export interface QuestionState {
  index: number;
  questionsList: QuestionType[];
  checked: boolean;
}

const useTest = () => {
  const [questions, setQuestions] = useState<QuestionState>({
    index: 0,
    questionsList: shuffleArray(questionList),
    checked: false,
  });

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
    }
  };

  return {
    questions,
    question,
    setAnswer,
    handlePrev,
    handleSubmit,
  };
};

export default useTest;
