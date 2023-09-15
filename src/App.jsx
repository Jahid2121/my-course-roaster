
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {

const handleSelectButton = course => {
  console.log('selectButton', course);
}

  return (
    <div className=' flex'>
    <Courses handleSelectButton={handleSelectButton}/>
    <Cart />
      
    </div>
  )
}

export default App
