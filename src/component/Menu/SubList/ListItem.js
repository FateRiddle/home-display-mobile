import React from 'react'
import { connect } from 'react-redux'
import { changeVisibility,changePiece } from '../../../actions'
import HiddenIcon from '../HiddenIcon'
import ArrowIcon from '../ArrowIcon'
import Selectables from './Selectables'

class ListItem extends React.Component {

  state = { expand: false }

  componentDidUpdate(prevProps, prevState) {
    const { currentPiece,id } = this.props
    if(currentPiece !== prevProps.currentPiece){
      if(currentPiece === id){
        this.setState({expand: true})
      }
      if(prevProps.currentPiece === id){
        this.setState({expand: false})
      }
    }
  }

  handleItemClick = () => {
    const { id,currentPiece,changePiece } = this.props
    if(id !== currentPiece){
      changePiece(id)
    }
    this.setState({expand:!this.state.expand})
  }

  render() {
    const { pieces,id,changeVisibility } = this.props
    const piece = pieces.byId[id]
    return (
      <li>
        <main className={this.state.expand?"ListItem Item expanded":"ListItem Item"}
          onClick={this.handleItemClick}
        >
          <span>
            {`${piece.name}( ${piece.options.length} )`}
          </span>
          <ArrowIcon active={this.state.expand} />
        </main>
        <aside
          onClick={() => changeVisibility(id)}
        >
          <HiddenIcon hidden={!piece.show} />
        </aside>
        {
          this.state.expand?<Selectables />:null
        }
      </li>
    )
  }
}

ListItem.propTypes = {
  id: React.PropTypes.string,
}

const mapStateToProps = ({ currentPiece,currentTab,pieces }) => ({
  currentPiece:currentPiece[currentTab-1],
  pieces,
})

ListItem = connect(mapStateToProps,{changeVisibility,changePiece})(ListItem)

export default ListItem
