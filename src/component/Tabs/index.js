import React from 'react'
import { connect } from 'react-redux'
import { tabs } from '../../data'
import { changeTab } from '../../actions'
import HeadIcon from './HeadIcon'

//为了传数据出去，可以放到单独的文件里
const getCurrentSelection = pieces => {
  let selection = ''

  const getProductCode = id => {
    const piece = pieces.byId[id]
    return piece.options[piece.currentOption-1]
  }
  const handle = id => {
    selection += getProductCode(id) + '^'
  }

  pieces.allIds.forEach(handle)
  selection = selection.substring(0,selection.length-1)
  return selection
}

const passData = pieces => {
  const node = document.getElementById('data')
  const value = getCurrentSelection(pieces)
  node.setAttribute('value',value)
}

let Tabs = ({
  pieces,
  currentTab,
  changeTab,
}) => {
  return (
      <ul className='Tabs'>
        {
          tabs.map((tab,index) => (
            <li
              key={index}
              onClick={() => {
                changeTab(index+1)
              }}
            >
              <HeadIcon tab={tab} active={index+1 === currentTab} />
            </li>
          ))
        }
      </ul>
  )
}

const mapStateToProps = ({ currentTab,pieces }) => ({
  currentTab,
  pieces,
})

Tabs = connect(
  mapStateToProps,
  {
    changeTab,
  },
)(Tabs)

export default Tabs

/* <ul className='App-navRight'>
  <li>
    <img src={require('../../image/icons/3dtiyan.png')} alt=""/>
    3D体验
  </li>
  <li id='gouwuche' onClick={() => passData(pieces)}>
    <img src={require('../../image/icons/gouwuche.png')} alt=""/>
    加入购物车
  </li>
</ul> */
