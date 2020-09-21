import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      {/* <Message/>
    <Counter/> */}
      <EventBind />
    </div>
  );
}

export default App;
