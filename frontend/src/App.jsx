import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import View from './components/View/View';
import AddProduct from './components/AddProduct/AddProduct';
const App = () => {
  return (
   <div className="app">
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
      </Routes>
    </div>
   </div>
  )
}

export default App