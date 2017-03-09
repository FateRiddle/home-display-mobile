import React from 'react'
import { connect } from 'react-redux'
import { getFilteredPieces } from '../../../reducers/index'
import ListItem from './ListItem'

let SubList = ({ store }) => {
  return (
    <ul className="SubList">
      {
        getFilteredPieces(store).map(id => {
          return (
            <ListItem key={id} id={id}/>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (store) => ({store})

SubList = connect(mapStateToProps)(SubList)

export default SubList
