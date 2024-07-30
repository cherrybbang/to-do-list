// import { useState } from "react";
import ToDoList from './components/todoList';

function ToDoHead() {
  return (
    <div className={'headingArea'}>
      <h1 className={'heading_h1'}>NOTE.</h1>
      <p className={'desctext'}>할 일을 적어주세요!</p>
    </div>
  )
}

function ToDoContent() {
  return (
    <div className={'listArea'}>
      <div className={'listBox'}>
        <ToDoList></ToDoList>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className={'todolistWrap'}>
      <ToDoHead></ToDoHead>
      <ToDoContent></ToDoContent>
    </div>
  )
}

export default App;