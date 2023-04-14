import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import { QUESTIONS_STORE } from '../../constants';
import GlobalContext from '../../hooks/useGlobalContext';

const Home = () => {
  const { start, questions } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleClick = () => {
    start();
    navigate('./test');
  };

  console.log('home', questions);

  const state = localStorage.getItem(QUESTIONS_STORE);

  return (
    <div>
      <H1>Welcome to test</H1>
      <p className={'max-w-[550px] mb-8'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias asperiores aut corporis, doloribus eius
        explicabo libero magni nam necessitatibus omnis perferendis reiciendis, sapiente, sint soluta totam veritatis
        vitae!
      </p>
      <Button onClick={handleClick}>Start</Button>
      {state && (
        <div>
          {questions.finished ? (
            <Link to={'./result'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Back to results
            </Link>
          ) : (
            <Link to={'./test'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Continue
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
