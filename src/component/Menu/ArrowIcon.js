import React from 'react'
import arrowDown from '../../image/icons/arrow-down.png'
import arrowRight from '../../image/icons/arrow-right.png'

const ArrowIcon = ({ active }) => (
  active?<img className="ArrowIconDown" src={arrowDown} alt=""/>:<img className="ArrowIconRight" src={arrowRight} alt=""/>
)

export default ArrowIcon
