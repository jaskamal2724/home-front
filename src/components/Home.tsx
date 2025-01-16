import { Link } from 'react-router-dom';
import MyButton from './MyButton';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Automation Demo</h1>
      <p className="text-lg mb-8 text-center">
        Welcome to the Home Automation Demo. Please visit the following pages to view the functionality:
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/User1" target='_' className='bg-blue-400'>
          <MyButton onClick={() => {}}>Visit User 1</MyButton>
        </Link>
        <Link to="/User2" target='_' className='bg-blue-400'>
          <MyButton onClick={() => {}}>Visit User 2</MyButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;

