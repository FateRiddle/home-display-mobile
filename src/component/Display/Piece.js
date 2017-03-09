import React from 'react'

let Piece = ({ hidden,position,src }) => (
  hidden?null:
    <img style={{
      display:'block',
      position:'absolute',
      zIndex:position[2],
      left:position[0],
      top:position[1],
    }} src={require(`../../image/options/${src}`)} alt="no-show"/>

)

export default Piece
