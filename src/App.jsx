
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState()

const handleSelectButton = course => {
  const isSelected = selectedCourses.find(item => item.id === course.id)
  let count =  course.credit_hours
  if(isSelected){
    return alert('Please select one at a time')
  }
  else{
    const newSelectedCourse = [...selectedCourses, course]
    setSelectedCourses(newSelectedCourse)
    selectedCourses.forEach(item => {
      count = count + item.credit_hours
      setTotalCredit(count)
    })
    

  }
}
  return (
    <div className=' flex'>
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart selectedCourses={selectedCourses} totalCredit={totalCredit}/>
      
    </div>
  )
}

export default App
