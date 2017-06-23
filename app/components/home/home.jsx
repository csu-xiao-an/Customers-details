import Signature from '../signature/signature.jsx'
import Partners from '../partners/partners.jsx'
import Comment from '../comment/comment.jsx'
import Details from '../details/details.jsx'
import Galery from '../galery/galery.jsx'
import Events from '../events/events.jsx'
import Topnav from '../topnav/topnav.jsx'
import Email from '../email/email.jsx'
import Call from '../call/call.jsx'
import Line from '../line/line.jsx'
import Debt from '../debt/debt.jsx'
import Hero from '../hero/hero.jsx'
import Map from '../map/map.jsx'
import Add from '../add/add.jsx'
import React from 'react'
import './home.styl'

class Home extends React.Component {
  render () {
    return (
      <div id='home'>
        <Topnav />
        <Hero />
        <Events />
        <Line />
        <Call />
        <Email />
        <Map />
        <Line />
        <Debt />
        <Line />
        <Comment />
        <Line />
        <Galery />
        <Line />
        <Add />
        <Line />
        <Partners />
        <Line />
        <Details />
        <Signature />
        <div className='test' />
      </div>
    )
  }
}
export default Home
