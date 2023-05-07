import React from 'react'
import Firstpage from './Components/Firstpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SecondPage from './Components/Secondpage'
import Description from './Components/Description'

const App = () => {
  return (
    <div>
      {/* Set up the BrowserRouter component */}
      <BrowserRouter>
        {/* Define the Routes */}
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Firstpage />} />
          {/* Route for the SecondPage component with a dynamic parameter */}
          <Route path="/Secondpage/:id" element={<SecondPage />} />
          {/* Route for the Description component with two dynamic parameters */}
          <Route path="/description/:sid/:id" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
