import { Link } from 'react-router-dom';
import H1 from '../../components/H1';

const Home = () => {
  return (
    <div>
      <H1>Welcome to test</H1>
      <p className={'max-w-[550px] mb-8'}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias asperiores aut corporis, doloribus eius
        explicabo libero magni nam necessitatibus omnis perferendis reiciendis, sapiente, sint soluta totam veritatis
        vitae!
      </p>
      <Link
        to={'/test'}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Start
      </Link>
    </div>
  );
};

export default Home;
