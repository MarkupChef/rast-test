import Question from '../../components/Question';
import useTest from './useTest';

const Test = () => {
  const { question, questions, setAnswer, handlePrev, handleSubmit } = useTest();

  return (
    <div>
      <h1>Test</h1>
      <p>Choose correct answer: {questions.index}</p>

      <form onSubmit={handleSubmit}>
        <Question
          title={question.expression}
          options={question.options}
          checked={question.answerUserIndex}
          setAnswer={setAnswer}
        />
        <button type={'button'} onClick={handlePrev}>
          Prev
        </button>
        <button type={'submit'}>Next</button>
      </form>
    </div>
  );
};

export default Test;
