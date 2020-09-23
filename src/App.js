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
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA';

function App() {
  return (
    <div className="App">
      {/* <Message/>
    <Counter/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={false} />
      <Inline /> */}
      {/* <Form /> */}
      <LifeCycleA />
    </div>
  );
}

export default App;
