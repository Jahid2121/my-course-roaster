
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([])

const handleSelectButton = course => {
  const isSelected = selectedCourses.find(item => item.id === course.id)

  if(isSelected){
    return alert('Please select one at a time')
  }
  else{
    const newSelectedCourse = [...selectedCourses, course]
    setSelectedCourses(newSelectedCourse)
  }
}
  return (
    <div className=' flex'>
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart selectedCourses={selectedCourses}/>
      
    </div>
  )
}

export default App
