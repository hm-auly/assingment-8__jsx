
import './App.css'
import NavSetup from './Componets/Setup/NavSetup'
import NavUp from './Componets/Setup/Nav/NavUp'
import Button from './Componets/Setup/Btn/Button'
import Title from './Componets/Setup/Text/Title'
import NavDown from './Componets/Setup/Nav/NavDown'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deshboard from './Componets/MainContent/Deshboard'
import Incidents from './Componets/MainContent/Incidents'
import Location from './Componets/MainContent/Location'

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='' element={<NavUp />} >
              <Route path='/' element={<Deshboard />} />
              <Route path='Incidents' element={<Incidents />} />
              <Route path='Locations' element={<Location />} />

           </Route>
        </Routes>
    </BrowserRouter>
  )
}

{/*        
      <h1 className='bg-red-100 p- text-3xl font-bold '>Hello Auly ullah</h1>
       
       <NavSetup className={"bg-blue-400"}>Hello</NavSetup> */}

      {/* <NavUp />
      <NavDown />

      {/* <Button />
      <Title /> */} 

      {/* <Navber /> */}

export default App
