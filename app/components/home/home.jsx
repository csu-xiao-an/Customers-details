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
import qs from 'qs'
// import Signature from './components/signature/signature.jsx'
import './home.styl'
const isPunchCards = config.plugins_list.includes('punch_cards')
const isColorsBeautech = config.plugins_list.includes('colors_beautech')
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
class Home extends React.Component {
  state = {
    isVisibleFields: false
  }

  showFields = () => this.setState({ isVisibleFields: true })

  componentWillMount = () => {
    const queryParams = qs.parse(this.props.history.location.search.slice(1))
    const routes = {
      'colors_beautech': isColorsBeautech && baseUrl + config.urls.colors_beautech,
      'timeline': baseUrl + config.urls.timeline,
      'punch_cards': isPunchCards && baseUrl + config.urls.punch_cards,
      'punch_cards/add': isPunchCards && baseUrl + config.urls.punch_cards_adding
    }

    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'

    if (!queryParams.page) return
    if (isPunchCards && queryParams.page.substring(0, 12) === 'punch_cards/' && !routes[queryParams.page]) {
      this.props.history.replace(baseUrl + config.urls.single_punch.replace('{punch_card_id}', queryParams.page.split('/')[1]))
    } else if (routes[queryParams.page]) {
      this.props.history.replace(routes[queryParams.page])
    }
  }

  render () {
    const isDebtsVisible = this.state.isVisibleFields || (config.data.debts && !!config.data.debts.length)
    const isEventVisible = this.state.isVisibleFields || (config.data.recent_appoinments && !!config.data.recent_appoinments.length)
    const isNotesVisible = this.state.isVisibleFields || (config.data.notes && !!config.data.notes.length)
    const isGalleryVisible = this.state.isVisibleFields || (config.data.gallery && !!config.data.gallery.length)
    const isGroupsVisible = this.state.isVisibleFields || (config.data.groups && !!config.data.groups.length)
    // const isSignatureVisible = this.state.isVisibleFields
    const isSocialNetworkVisible = this.state.isVisibleFields || (config.data.soc_media && !!config.data.soc_media.length)
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} />
        <HotLinks {...this.props} />
        <Profile {...this.props} isVisibleFields={this.state.isVisibleFields} />
        {isEventVisible && <Events {...this.props} />}
        {/* {isDebtsVisible && <Debts {...this.props} /> } */}
        {isNotesVisible && <Notes {...this.props} />}
        <Media {...this.props} />
        {isGroupsVisible && <Groups {...this.props} />}
        {/* <Signature {...this.props} /> */}
        {/* {isSocialNetworkVisible && <SocialNetwork {...this.props} />} */}
        {/* {!this.state.isVisibleFields && <div className='main-button'>
          <button onClick={this.showFields}>{config.translations.show_more_fields.toUpperCase()}</button>
        </div>}
        <DeleteCustomer {...this.props} /> */}
      </div>
    )
  }
}
export default AccessRights(Home)
