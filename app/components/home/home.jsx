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
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  state = {
    isVisibleFields: false,
    isFirstNote: false,
    isFirstDebt: false,
    // moveToAnchor: false,
    moveToDebt: false,
    activateNone: false,
    activateDebt: false,
    isFirstItemInGallery: false,
    showAddGallery: config.data.gallery.length === 0 && true,
    // showAddNote: config.data.notes.length === 0 && true,
    showAddDebt: config.data.debts.length === 0 && true,
    notesData: [...config.data.notes]
  }
  createNewNote = (rem, r, added, text) => {
    const newNote = {}
    newNote.id = r.data
    newNote.text = text
    newNote.date = added
    if (rem) newNote.reminder_date = rem
    this.setState(state => ({
      notesData: [
        newNote,
        ...state.notesData
      ],
      isFirstNote: this.state.notesData.lehth > 0,
      activateNone: this.state.notesData.lehth > 0
    }))
  }
  editeNote = (rem, key, text) => {
    this.setState(state => ({
      notesData: state.notesData.map(
        note => (note.id === +key ? {
          ...note,
          reminder_date: rem || note.reminder_date,
          text } : note)
      )
    }))
  }
  handleDeleteNote = id => {
    this.setState(state => ({
      notesData: state.notesData.filter(note => note.id !== id),
      isFirstNote: this.state.notesData.lehth > 0,
      activateNone: this.state.notesData.lehth > 0
    }))
  }
  showFields = () => this.setState({ isVisibleFields: true })
  hiddenNotes = () => this.setState({ isFirstNote: this.state.notesData.lehth > 0, activateNone: this.state.notesData.lehth > 0 })
  createFirstNote = () => this.setState({ isFirstNote: true, activateNone: true })
  createFirstDebt = () => this.setState({ isFirstDebt: true, activateDebt: true, showAddDebt: false })
  addingFirstItem = () => this.setState({ isFirstItemInGallery: true })
  componentWillMount () {
    const { history } = this.props
    const queryParams = qs.parse(history.location.search.slice(1))
    const [ mainRoute, tailRoute = '' ] = queryParams.page ? queryParams.page.split('/') : []
    const routes = {
      'timeline': baseUrl + config.urls.timeline,
      'colors_beautech': isColorsBeautech && baseUrl + config.urls.colors_beautech,
      'punch_cards': isPunchCards && {
        [tailRoute]: baseUrl + config.urls.single_punch.replace('{punch_card_id}', tailRoute),
        'add': baseUrl + config.urls.punch_cards_adding,
        '': baseUrl + config.urls.punch_cards
      }
    }
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    const url = routes[mainRoute]
    if (!url) return
    if (typeof url === 'object' && url[tailRoute]) {
      history.replace(url[tailRoute])
    }
    history.replace(url)
  }
  render () {
    const isDebtsVisible = this.state.isVisibleFields || (config.data.debts && !!config.data.debts.length) || this.state.isFirstDebt
    const isEventVisible = this.state.isVisibleFields || (config.data.recent_appoinments && !!config.data.recent_appoinments.length)
    const isNotesVisible = this.state.isVisibleFields || (config.data.notes && !!this.state.notesData.length) || this.state.isFirstNote
    const isGalleryVisible = this.state.isVisibleFields || (config.data.gallery && !!config.data.gallery.length) || this.state.isFirstItemInGallery
    const isGroupsVisible = this.state.isVisibleFields || (config.data.groups && !!config.data.groups.length)
    // const isSignatureVisible = this.state.isVisibleFields
    // const isSocialNetworkVisible = this.state.isVisibleFields || (config.data.soc_media && !!config.data.soc_media.length)
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} />
        <HotLinks
          notesData={this.state.notesData}
          showAddDebt={this.state.showAddDebt}
          // showAddNote={this.state.showAddNote}
          showAddGallery={this.state.showAddGallery}
          createFirstDebt={this.createFirstDebt}
          createFirstNote={this.createFirstNote}
          addingFirstItem={this.addingFirstItem}
          {...this.props}
        />
        <Profile {...this.props} isVisibleFields={this.state.isVisibleFields} />
        {isEventVisible && <Events {...this.props} />}
        {isDebtsVisible && <Debts activateDebt={this.state.activateDebt} {...this.props} /> }
        {isNotesVisible && <Notes
          hiddenNotes={this.hiddenNotes}
          activateNone={this.state.activateNone}
          createNewNote={this.createNewNote}
          deleteNote={this.handleDeleteNote}
          editeNote={this.editeNote}
          notesData={this.state.notesData}
          {...this.props}
        />}
        {isGalleryVisible && <Media {...this.props} />}
        {isGroupsVisible && <Groups {...this.props} />}
        {/* <Signature {...this.props} /> */}
        {/* {isSocialNetworkVisible && <SocialNetwork {...this.props} />} */}
        {!this.state.isVisibleFields && <div className='main-button'>
          <button onClick={this.showFields}>{config.translations.show_more_fields.toUpperCase()}</button>
        </div>}
        <DeleteCustomer {...this.props} />
      </div>
    )
  }
}
export default AccessRights(Home)
