import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalGreeting from './components/ConditionalGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      {/* <Message/>
    <Counter/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalGreeting /> */}
      {/* <NameList /> */}
      <StyleSheet primary={false} />
      <Inline />
    </div>
  );
}

export default App;
