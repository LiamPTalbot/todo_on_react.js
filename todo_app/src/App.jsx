import { Header } from "./compnents/Header"
import { Tabs } from "./compnents/Tabs"
import { TodoInput } from "./compnents/TodoInput"
import { TodoList } from "./compnents/TodoList"

function App() {
  let x = 3
  return (
    <>
    <Header/>
    <Tabs/>
    <TodoList/>
    <TodoInput/>
    </>
  )
}

export default App
