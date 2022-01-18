import About from '../components/about/About'
import Menu from '../components/menu/menu'
import Todo from '../components/todo/Todo'

function App() {
  return (
    <div className="Container">
      <Menu />
      <Todo />
      <About />
    </div>
  )
}

export default App
