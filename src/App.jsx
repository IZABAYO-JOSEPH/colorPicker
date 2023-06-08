import { useState } from 'react'
import FormComponent from './FormComponent'
import ColorList from './colorList'
import Values from 'values.js'
import {ToastContainer,toast} from "react-toastify"
function App() {
  
const [colors,setColors] = useState(new Values('#f15025').all(10))
const addColor = (color)=>{
 try {
  const newColors = new Values(color).all(10)
  setColors(newColors)
} catch (error) {
  toast.error(error.message)
 }
}
  return (
     
      <main>
        <ToastContainer position='top-center'/>
        <FormComponent addColor={addColor}/>
        <ColorList colors={colors} />
      </main> 
     
  
  )
}

export default App
