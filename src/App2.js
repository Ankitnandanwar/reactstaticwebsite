import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './NavBarFile/Home'
import Contact from './NavBarFile/Contact'
import BookTable from './NavBarFile/BookTable'
import NavBar from './NavBarFile/NavBar'
import './index.css'
import Footer from './NavBarFile/Footer'
import Menu from './NavBarFile/Menu'


const App2 = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/menu' index element={<Menu/>}/>
          <Route path='/contact' index element={<Contact/>}/>
          <Route path='/booktable' index element={<BookTable/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>   
    </>
  )
}

export default App2