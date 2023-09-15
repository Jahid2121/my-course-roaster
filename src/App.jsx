
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)

const handleSelectButton = course => {
  const isSelected = selectedCourses.find(item => item.id === course.id)
  let count =  course.credit_hours
  if(isSelected){
    return alert('Please select one at a time')
  }
  else{
    selectedCourses.forEach(item => {
      count = count + item.credit_hours
    })
    setTotalCredit(count)
    const remaining = 20 - count
    setCreditRemaining(remaining);
    const newSelectedCourse = [...selectedCourses, course]
    setSelectedCourses(newSelectedCourse)

  }
}
  return (
    <div className=' flex'>
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart creditRemaining={creditRemaining} selectedCourses={selectedCourses} totalCredit={totalCredit}/>
      
    </div>
  )
}

export default App
