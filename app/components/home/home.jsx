import DeleteCustomer from './components/delete_customer/delete_customer.jsx'
import SocialNetwork from './components/social-network/social-network.jsx'
import HiddenFields from './components/hidden-fields/hidden-fields.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import HotLinks from './components/hot-links/hot-links.jsx'
import Profile from './components/profile/profile.jsx'
import Events from './components/events/events.jsx'
import Groups from './components/groups/groups.jsx'
import Media from './components/media/media.jsx'
import Notes from './components/notes/notes.jsx'
import Debts from './components/debts/debts.jsx'
import Hero from './components/hero/hero.jsx'
import Topnav from '../topnav/topnav.jsx'
import './home.styl'

class Home extends React.Component {
  state = {
    isVisibleFields: false
  }

  test = () => this.setState({ isVisibleFields: !this.state.isVisibleFields })

  componentWillMount = () => { if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }

  render () {
    console.log('test', this.state)
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} />
        <HotLinks {...this.props} />
        <Profile {...this.props} isVisibleFields={this.state.isVisibleFields} />
        {(config.data.recent_appoinments && !!config.data.recent_appoinments.length) && <Events {...this.props} />}
        {(config.data.debts && !!config.data.debts.length) && <Debts {...this.props} />}
        {(config.data.notes && !!config.data.notes.length) && <Notes {...this.props} />}
        {(config.data.gallery && !!config.data.gallery.length) && <Media {...this.props} />}
        {(config.data.groups && !!config.data.groups.length) && <Groups {...this.props} />}
        {(config.data.soc_media && !!config.data.soc_media.length) && <SocialNetwork {...this.props} />}
        <HiddenFields {...this.props} isVisibleFields={this.state.isVisibleFields} test={this.test} />
        <DeleteCustomer {...this.props} />
      </div>
    )
  }
}
export default AccessRights(Home)
