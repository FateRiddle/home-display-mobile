import React from 'react'


const HeadIcon = ({ tab,active }) => (
  <div className={active?'HeadIcon active':'HeadIcon'} >
  {
    active?<img src={require(`../../image/icons/${tab.icon2}`)} alt=""/>:
    <img src={require(`../../image/icons/${tab.icon}`)} alt=""/>
  }
  </div>
)

export default HeadIcon
