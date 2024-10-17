import { Header } from "./compnents/Header"
import { Tabs } from "./compnents/Tabs"
import { TodoInput } from "./compnents/TodoInput"
import { TodoList } from "./compnents/TodoList"
import { useState } from 'react'

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the grocieries!', complete: false },
  //   { input: 'Learm how to web design', complete: true },
  //   { input: 'Say hi to new job', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  
  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
  }

  function handleEditTodo() {

  }

  function handleDeleteTodo() {
    
  }

  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} />
    <TodoList todos={todos} />
    <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
