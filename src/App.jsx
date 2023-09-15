
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([])

const handleSelectButton = course => {
  const newSelectedCourse = [...selectedCourse, course]
  setSelectedCourse(newSelectedCourse)
}
  return (
    <div className=' flex'>
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart selectedCourse={selectedCourse}/>
      
    </div>
  )
}

export default App
