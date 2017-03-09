import React from 'react'
import shoucang from '../../image/icons/shoucang.png'
import gouwuche from '../../image/icons/gouwuche.png'

class Footer extends React.Component {

  render() {
    return <div className="Footer">
      <section>
        <img src={shoucang} alt=""/>
        <figure>收藏</figure>
      </section>
      <div className="Footer-line"></div>
      <section>
        <img src={gouwuche} alt=""/>
        <figure>购物车</figure>
      </section>
      <button>加入购物车</button>
      <button>立即购买</button>
    </div>
  }
}

export default Footer
