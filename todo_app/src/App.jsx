import { Header } from "./compnents/Header"
import { Tabs } from "./compnents/Tabs"
import { TodoInput } from "./compnents/TodoInput"
import { TodoList } from "./compnents/TodoList"

function App() {
  const todos = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the grocieries!', complete: false },
    { input: 'Learm how to web design', complete: true },
    { input: 'Say hi to new job', complete: true },
  ]
  
  return (
    <>
    <Header todos={todos} />
    <Tabs />
    <TodoList/>
    <TodoInput/>
    </>
  )
}

export default App
