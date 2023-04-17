import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import { RootState } from '../../store';
import { start } from '../../store/slice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { started, finished } = useSelector((state: RootState) => state.test);

  const handleClick = () => {
    dispatch(start());
    navigate('./test');
  };

  console.log('home');

  return (
    <div>
      <H1>Welcome to test</H1>
      <p className={'max-w-[550px] mb-8'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias asperiores aut corporis, doloribus eius
        explicabo libero magni nam necessitatibus omnis perferendis reiciendis, sapiente, sint soluta totam veritatis
        vitae!
      </p>
      <Button onClick={handleClick}>Start</Button>
      {started && (
        <div>
          <Link to={'/test'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Continue test
          </Link>
        </div>
      )}

      {finished && (
        <div>
          <Link to={'/result'} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            Back to results
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
