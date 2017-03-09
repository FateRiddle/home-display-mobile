import React from 'react'
import './App.css'
import Tabs from './component/Tabs/index'
import Display from './component/Display/index'
import Menu from './component/Menu/index'
import Footer from './component/Footer'

const App = () => (
  <div className="App">
    <Display />
    <Tabs />
    <Menu />
    <Footer />
  </div>
)

export default App
