// import React from 'react'
// import HiddenIcon from './HiddenIcon'
// import ArrowIcon from './ArrowIcon'
// import { changeVisibility } from '../../../actions'
//
// class Item extends React.Component {
//
//   state = { expend: false }
//
//   getStyle = () => {
//     if(this.props.active){
//       return {color:"#df641e"}
//     }
//   }
//
//   handleItemClick = () => {
//     this.props.beCurrentFocus()
//     this.setState({expend:!this.state.expend})
//   }
//
//   render() {
//     const { piece } = this.props
//     return (
//       <li
//         style={this.getStyle()}
//       >
//         <span onClick={this.handleItemClick}>
//           {`${piece.name}( ${piece.options.length} )`}
//           <ArrowIcon active={this.state.expend} />
//         </span>
//         <span
//           onClick={() => changeVisibility(id)}
//         >
//         <HiddenIcon hidden={!piece.show} />
//         </span>
//       </li>
//     )
//   }
// }
//
// Item.propTypes = {
//   active: React.PropTypes.bool,
//   beCurrentFocus: React.PropTypes.func,
//   piece: React.PropTypes.object,
// }
//
// export default Item
