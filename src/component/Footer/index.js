import React from 'react'
import shoucangUrl from '../../image/icons/shoucang.png'
import shoucang2Url from '../../image/icons/shoucang2.png'
import gouwucheUrl from '../../image/icons/gouwuche.png'

class Footer extends React.Component {

  state = {shoucang:false}

  render() {
    const { shoucang } = this.state
    return <div className="Footer">
      <section onClick={()=>this.setState({shoucang:!shoucang})}>
      {
        shoucang?<img src={shoucang2Url} alt=""/>:<img src={shoucangUrl} alt=""/>
      }

        <figure>收藏</figure>
      </section>
      <div className="Footer-line"></div>
      <section>
        <img src={gouwucheUrl} alt=""/>
        <figure>购物车</figure>
      </section>
      <button>加入购物车</button>
      <button>立即购买</button>
    </div>
  }
}

export default Footer
