import './App.css';
import InputShortener from './components/InputShortener';
import LinkResults from './components/LinkResults';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <header className="App-header">
        <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>Shorten a long link</h1>
        <InputShortener setInputValue={setInputValue} />
        <LinkResults inputValue={inputValue} />
      </header>
    </div>
  );
}

export default App;
