import SocialNetwork from '../social-network/social-network.jsx'
import Signature from '../signature/signature.jsx'
import Comment from '../comment/comment.jsx'
import Details from '../details/details.jsx'
import Media from '../media/media.jsx'
import Events from '../events/events.jsx'
import Topnav from '../topnav/topnav.jsx'
import Source from '../source/source.jsx'
import Groups from '../groups/groups.jsx'
import Adress from '../adress/adress.jsx'
import React, { Component } from 'react'
import Email from '../email/email.jsx'
import Debts from '../debts/debts.jsx'
import Phone from '../phone/phone.jsx'
import Line from '../line/line.jsx'
import Hero from '../hero/hero.jsx'
import Add from '../add/add.jsx'
import './home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home' className={config.isRtL ? 'direction' : ''}>
        <Topnav />
        <Hero />
        <Events />
        <Line />
        <Phone />
        <Email />
        <Adress />
        <Line />
        <Debts />
        <Line />
        <Comment />
        <Line />
        <Media />
        <Line />
        <Source />
        <SocialNetwork />
        <Add />
        <Line />
        <Groups />
        <Line />
        <Details />
        <Signature />
        <div className='test' />
      </div>
    )
  }
}
export default Home
