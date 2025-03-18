import Navbar from "./Components/navbar"
import Search from "./Components/search"
import Footer from "./Components/footer"
import StickyWall from "./Components/stickyWall"
import { useState } from "react"
import { ThemeProvider } from "./Context/ThemeContext"

function App() {
  const [state, setState] = useState('block')
  const [task, setTask] = useState([])
  return (
    <>
      <ThemeProvider>
        <div className="dark:bg-gray-950 w-full h-screen ">
        <div className="relative ">
          <img className='w-12 h-12 absolute left-89 top-5 hover:cursor-pointer max-[500px]:left-47 max-[900px]:left-60 ' onClick={() => {
            setState(state === 'block' ? 'hidden' : 'block')
          }} src="https://cdn3d.iconscout.com/3d/premium/thumb/todo-list-3d-icon-download-in-png-blend-fbx-gltf-file-formats--task-to-do-plan-daily-planner-pack-miscellaneous-icons-8168038.png?f=webp" alt="todo" />
          <Navbar />
        </div>
        {state == 'block' ? <Search task={task} setTask={setTask} /> : <StickyWall task={task} setTask={setTask} />}
        <Footer />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
