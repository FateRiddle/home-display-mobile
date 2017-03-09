import React from 'react'
import { connect } from 'react-redux'
import { changeOption } from '../../../actions'

class Selectables extends React.Component {

  render(){
    const { p,pieces,changeOption } = this.props
    return ( p === '0'?null:
    <ul className="Selectables">
        {
          pieces.byId[p].options.map((option,index) => {
            return (
              <li key={index}>
                <img className={pieces.byId[p].currentOption === (index+1)?"selected":null}
                  src={require(`../../../image/options/${pieces.byId[p].folder}/${index+1}.${pieces.byId[p].format}`)}
                  alt="block"
                  onClick={()=>{
                    changeOption(p,index+1)
                  }}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ currentTab, currentPiece, pieces }) => {
  const p = currentPiece[currentTab-1]
  return {
    p,
    pieces,
  }
}

Selectables = connect(
  mapStateToProps,
  {changeOption},
)(Selectables)

export default Selectables
