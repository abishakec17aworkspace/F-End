import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import Main from './Pages/Main'
import Page3 from './Pages/page3'
import Page2 from './Pages/Page2'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='/Page2' element={<Page2/>}/>
        <Route path='/Page3' element={<Page3/>}/>
      </Route>
    </Routes>
  )
}

export default App
