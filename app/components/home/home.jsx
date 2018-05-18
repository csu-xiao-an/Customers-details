import DeleteCustomer from './components/delete_customer/delete_customer.jsx'
import SocialNetwork from './components/social-network/social-network.jsx'
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

  showFields = () => this.setState({ isVisibleFields: true })

  componentWillMount = () => { if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }

  render () {
    const isDebtsVisible = this.state.isVisibleFields || (config.data.debts && !!config.data.debts.length)
    const isEventVisible = this.state.isVisibleFields || (config.data.recent_appoinments && !!config.data.recent_appoinments.length)
    const isNotesVisible = this.state.isVisibleFields || (config.data.notes && !!config.data.notes.length)
    const isGalleryVisible = this.state.isVisibleFields || (config.data.gallery && !!config.data.gallery.length)
    const isGroupsVisible = this.state.isVisibleFields || (config.data.groups && !!config.data.groups.length)
    const isSocialNetworkVisible = this.state.isVisibleFields || (config.data.soc_media && !!config.data.soc_media.length)
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} />
        <HotLinks {...this.props} />
        <Profile {...this.props} isVisibleFields={this.state.isVisibleFields} />
        {isEventVisible && <Events {...this.props} />}
        {isDebtsVisible && <Debts {...this.props} /> }
        {isNotesVisible && <Notes {...this.props} />}
        {isGalleryVisible && <Media {...this.props} />}
        {isGroupsVisible && <Groups {...this.props} />}
        {isSocialNetworkVisible && <SocialNetwork {...this.props} />}
        {!this.state.isVisibleFields && <div className='main-button'>
          <button onClick={this.showFields}>{config.translations.show_more_fields.toUpperCase()}</button>
        </div>}
        <DeleteCustomer {...this.props} />
      </div>
    )
  }
}
export default AccessRights(Home)
