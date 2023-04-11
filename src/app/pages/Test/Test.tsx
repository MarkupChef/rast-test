import Button from '../../components/Button';
import Counter from '../../components/Counter';
import Question from '../../components/Question';
import useTest from './useTest';

const Test = () => {
  const { questions, question, handlePrev, handleSubmit, restart } = useTest();

  return (
    <div>
      <Counter />
      <form onSubmit={handleSubmit}>
        <div className={'mb-6'}>
          <Question title={question.expression} question={question} />
        </div>
        {questions.index > 0 && <Button onClick={handlePrev}>Prev</Button>}
        <Button type={'submit'}>Next</Button>
        <div
          className={'font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer'}
          onClick={restart}
        >
          Restart
        </div>
      </form>
    </div>
  );
};

export default Test;
