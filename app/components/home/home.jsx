import SocialNetwork from '../social-network/social-network.jsx'
import Signature from '../signature/signature.jsx'
import Details from '../details/details.jsx'
import Events from '../events/events.jsx'
import Topnav from '../topnav/topnav.jsx'
import Source from '../source/source.jsx'
import Groups from '../groups/groups.jsx'
import Adress from '../adress/adress.jsx'
import React, { Component } from 'react'
import Email from '../email/email.jsx'
import Media from '../media/media.jsx'
import Notes from '../notes/notes.jsx'
import Debts from '../debts/debts.jsx'
import Phone from '../phone/phone.jsx'
import Line from '../line/line.jsx'
import Hero from '../hero/hero.jsx'
import './home.styl'

class Home extends Component {
  render () {
    let list = document.getElementsByTagName('body')[0]
    config.isRtL ? list.style.direction = 'rtl' : list.style.direction = 'ltr'
    return (
      <div id='home'>
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
        <Notes />
        <Line />
        <Media />
        <Line />
        <Source />
        <SocialNetwork />
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
