import SocialNetwork from './components/social-network/social-network.jsx'
import HiddenFields from './components/hidden-fields/hidden-fields.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Signature from './components/signature/signature.jsx'
import Birthdate from './components/birthdate/birthdate.jsx'
import HotLinks from './components/hot-links/hot-links.jsx'
import Details from './components/details/details.jsx'
import Events from './components/events/events.jsx'
import Source from './components/source/source.jsx'
import Groups from './components/groups/groups.jsx'
import Adress from './components/adress/adress.jsx'
import Email from './components/email/email.jsx'
import Media from './components/media/media.jsx'
import Notes from './components/notes/notes.jsx'
import Debts from './components/debts/debts.jsx'
// import Phone from './components/phone/phone.jsx'
import Hero from './components/hero/hero.jsx'
import Sex from './components/sex/sex.jsx'
import Topnav from '../topnav/topnav.jsx'
import Profile from './components/profile/profile.jsx'

import './home.styl'

class Home extends React.Component {
  componentWillMount = () => { if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }
  render () {
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} />
        <HotLinks {...this.props} />
        <Profile {...this.props} />
        {config.data.recent_appoinments && <Events {...this.props} />}
        {/*<Phone {...this.props} />*/}
        <Details {...this.props} />
        <Signature {...this.props} />
        {config.data.email && <Email {...this.props} />}
        {config.data.adress && <Adress {...this.props} />}
        {config.data.debts && <Debts {...this.props} />}
        {config.data.notes && <Notes {...this.props} />}
        {config.data.gallery && <Media {...this.props} />}
        {config.data.source && <Source {...this.props} />}
        {config.data.soc_media && <SocialNetwork {...this.props} />}
        {config.data.groups && <Groups {...this.props} />}
        {config.data.gender && <Sex {...this.props} />}
        {config.data.birthdate && <Birthdate {...this.props} />}
        <HiddenFields {...this.props} />
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(Home)
