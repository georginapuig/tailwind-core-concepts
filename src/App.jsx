import './App.css';
import Fundamentals from './components/Fundamentals';
import Hover from './components/Hover';

function App() {
  return (
    <div>
      <h1 className='text-base font-semibold text-teal-300'>Core Concepts</h1>
      <Fundamentals />
      <Hover />
    </div>
  );
}

export default App;
