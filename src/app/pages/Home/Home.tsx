import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad alias asperiores aut corporis, doloribus eius
        explicabo libero magni nam necessitatibus omnis perferendis reiciendis, sapiente, sint soluta totam veritatis
        vitae!
      </p>
      <Link to={'#'}>Start</Link>
    </div>
  );
};

export default Home;
