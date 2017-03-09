import React from 'react'
import './App.css'
import Tabs from './component/Tabs/index'
import Display from './component/Display/index'
import Menu from './component/Menu/index'

const App = () => (
  <div className="App">
    <Display />
    <Tabs />
    <Menu />
  </div>
)

export default App
