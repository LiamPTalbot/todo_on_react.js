import { Header } from "./compnents/Header"
import { Tabs } from "./compnents/Tabs"
import { TodoInput } from "./compnents/TodoInput"
import { TodoList } from "./compnents/TodoList"

function App() {
  let x = 3
  return (
    <div>

    <Header/>
    <Tabs/>
    <TodoList/>
    <TodoInput/>
    
    </div>
  )
}

export default App
