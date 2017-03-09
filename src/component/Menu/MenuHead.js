import React from 'react'
import image from '../../image/icons/3dtiyan.png'
// import { connect } from 'react-redux'

const MenuHead = () => (
  <div className='MenuHead'>
    <main>
      <header>优享包</header>
      <div><span>599</span>元/m<sup>2</sup></div>
    </main>
    <aside>
      <img src={image} alt=""/>
      <button>销售清单</button>
    </aside>
  </div>
)

export default MenuHead
