import About from '../components/about/About'
import Menu from '../components/menu/menu'
import Todo from '../components/todo/Todo'
import NotFound from '../components/notFound/404'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="Container">
      <Menu />
      <Routes>
        <Route path="todos" element={<Todo />} />
        <Route path="/" element={<Todo />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
