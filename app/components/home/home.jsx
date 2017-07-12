import Signature from '../signature/signature.jsx'
import Groups from '../groups/groups.jsx'
import Comment from '../comment/comment.jsx'
import Details from '../details/details.jsx'
import Gallery from '../gallery/gallery.jsx'
import Events from '../events/events.jsx'
import Topnav from '../topnav/topnav.jsx'
import React, { Component } from 'react'
import Email from '../email/email.jsx'
import Call from '../call/call.jsx'
import Line from '../line/line.jsx'
import Debts from '../debts/debts.jsx'
import Hero from '../hero/hero.jsx'
import Adress from '../adress/adress.jsx'
import Add from '../add/add.jsx'
import './home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Topnav />
        <Hero />
        <Events />
        <Line />
        <Call />
        <Email />
        <Adress />
        <Line />
        <Debts />
        <Line />
        <Comment />
        <Line />
        <Gallery />
        <Line />
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
