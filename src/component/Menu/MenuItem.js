import React from 'react'
import { connect } from 'react-redux'
import { changeTab } from '../../actions'
import ArrowIcon from './ArrowIcon'
import SubList from './SubList'

const tabs = ['客餐厅','卧室','厨房','卫生间','阳台']

class MenuItem extends React.Component {

  state = { expand: false }

  componentDidMount() {
    const { currentTab,tabId } = this.props
    if(currentTab === tabId){
      this.setState({expand: true})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentTab,tabId } = this.props
    if(currentTab !== prevProps.currentTab){
      if(currentTab === tabId){
        this.setState({expand: true})
      }
      if(prevProps.currentTab === tabId){
        this.setState({expand: false})
      }
    }
  }

  handleItemClick = () => {
    const { tabId,currentTab,changeTab } = this.props
    if(tabId !== currentTab){
      changeTab(tabId)
    }
    this.setState({expand:!this.state.expand})
  }

  render() {
    const { tabId } = this.props
    return (
      <li>
        <main className={this.state.expand?"MenuItem Item expanded":"MenuItem Item"}
          onClick={this.handleItemClick}
        >
          <span>{tabs[tabId-1]}</span>
          <ArrowIcon active={this.state.expand} />
        </main>
        {
          this.state.expand?<SubList />:null
        }
      </li>
    )
  }
}

MenuItem.propTypes = {
  tabId: React.PropTypes.number,
}

const mapStateToProps = ({ currentTab }) => ({
  currentTab,
})

MenuItem = connect(mapStateToProps,{changeTab})(MenuItem)

export default MenuItem


//acitve itemClick hiddenIconClick
