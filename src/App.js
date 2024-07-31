// 기본구조작성
import ToDoList from './components/todoList';

function ToDoHead() {
  return (
    <div className={'headingArea'}>
      <h1>NOTE.</h1>
      <p className={'desctext'}>할 일을 적어주세요!</p>
    </div>
  )
}

function ToDoContent() {
  return (
    <div>
      <div>
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