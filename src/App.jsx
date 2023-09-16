
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'
import toast, { Toaster } from 'react-hot-toast'


function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [creditRemaining, setCreditRemaining] = useState(20)

const handleSelectButton = course => {
  const isSelected = selectedCourses.find(item => item.id === course.id)
  let count =  course.credit_hours
  if(isSelected){
    toast.error("You have already selected this course.")
    return;
  }
  else{
    selectedCourses.forEach(item => {
      count = count + item.credit_hours
    })
    const remaining = 20 - count

    if(remaining < 0){
      toast.error('You cannot select this course due to credit hour limits has been exceeded')
      return;
    }
    else{
      setCreditRemaining(remaining);
      setTotalCredit(count)

    }
    const newSelectedCourse = [...selectedCourses, course]
    setSelectedCourses(newSelectedCourse)

  }
}
  return (
    <>
    <div className='m-4 p-4'>
      <h3 className=' text-4xl font-bold text-center'>MY Course Roaster</h3>
    </div>
    <div className='flex flex-col-reverse md:flex-row gap-2'>
          <Toaster />
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart creditRemaining={creditRemaining} selectedCourses={selectedCourses} totalCredit={totalCredit}/>
      
    </div>
    </>
  )
}

export default App
