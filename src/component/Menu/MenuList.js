import React from 'react'
import { connect } from 'react-redux'
import MenuItem from './MenuItem'

let MenuList = ({ store }) => {
  return (
    <div>
      <ul className="MenuList">
        {
          [1,2,3,4,5].map(tabId => (
            <MenuItem key={tabId} tabId={tabId} />
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (store) => ({store})

MenuList = connect(mapStateToProps)(MenuList)

export default MenuList
