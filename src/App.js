import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalGreeting from "./components/ConditionalGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentsDemo from "./components/FragmentsDemo";
import TableFragment from "./components/TableFragment";
import YoutubePlayerComponent from "./components/YoutubePlayerComponent";
import ParentComponentRegPure from "./components/ParentComponentRegPure";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalsDemo from "./components/PortalsDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import UserRenderProp from "./components/UserRenderProp";
import CounterRenderProp from "./components/CounterRenderProp";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserComponent";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className='App'>
      {/* <Message/>
    <Counter/> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalGreeting /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={false} />
      <Inline /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentsDemo /> */}
      {/* <TableFragment /> */}
      {/* <YoutubePlayerComponent /> */}
      {/* <ParentComponentRegPure /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalsDemo /> */}

      {/* <Hero name="thusitha" />
      <ErrorBoundary>
        <Hero name="joker" />
      </ErrorBoundary> */}
      {/* <ClickCounter name="thusitha"/>
   <HoverCounter/> */}
      {/* <ClickCounterTwo/>
   <HoverCounterTwo/>
   
  <UserRenderProp render={()=>{
  return  "thusitha"
  }}/> */}
      {/* 
      <CounterRenderProp>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp>

      <CounterRenderProp>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterRenderProp> */}
{/* 
      <UserProvider value='thusitha'>
        <ComponentC />
      </UserProvider> */}

      {/* <PostList/> */}
    
    <PostForm/>
    </div>
  );
}

export default App;
