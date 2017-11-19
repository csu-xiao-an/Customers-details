import SocialNetwork from '../social-network/social-network.jsx'
import HiddenFields from '../hidden-fields/hidden-fields.jsx'
import Signature from '../signature/signature.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import Details from '../details/details.jsx'
import Events from '../events/events.jsx'
import Topnav from '../topnav/topnav.jsx'
import Source from '../source/source.jsx'
import Groups from '../groups/groups.jsx'
import Adress from '../adress/adress.jsx'
import Email from '../email/email.jsx'
import Media from '../media/media.jsx'
import Notes from '../notes/notes.jsx'
import Debts from '../debts/debts.jsx'
import Phone from '../phone/phone.jsx'
import Hero from '../hero/hero.jsx'
import Sex from '../sex/sex.jsx'

import './home.styl'

export default class Home extends React.Component {
  componentWillMount = () => { if (config.data.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }
  render () {
    return (
      <div id='home'>
        <Topnav />
        <Hero />
        {config.data.recent_appoinments && <Events />}
        <Phone />
        <Signature />
        {config.data.email && <Email />}
        {config.data.adress && <Adress />}
        {config.data.debts && <Debts />}
        {config.data.notes && <Notes />}
        {config.data.gallery && <Media />}
        {config.data.source && <Source />}
        {config.data.soc_media && <SocialNetwork />}
        {config.data.groups && <Groups />}
        {config.data.gender && <Sex />}
        {config.data.birthdate && <Birthdate />}
        <Details />
        <HiddenFields />
        <div className='test' />
      </div>
    )
  }
}
