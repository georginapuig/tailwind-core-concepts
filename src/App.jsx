import './App.css';
import Fundamentals from './components/Fundamentals';

function App() {
  return (
    <div>
      <h1 className='text-base font-semibold text-teal-300'>Core Concepts</h1>
      <p className='text-3xl font-extrabold pt-2 pb-5'>
        Utility-First Fundamentals
      </p>
      <Fundamentals />
    </div>
  );
}

export default App;
