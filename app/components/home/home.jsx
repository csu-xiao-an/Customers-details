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
    activateNone: false,
    activateDebt: false,
    isFirstItemInGallery: false,
    showAddGallery: config.data.gallery.length === 0 && true,
    galleryData: [...config.data.gallery],
    notesData: [...config.data.notes],
    debtsData: [...config.data.debts]
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
  createNewDebt = (sum, description, added, id) => {
    const newDebt = {}
    newDebt.id = id
    newDebt.sum = sum
    newDebt.desc = description
    newDebt.date = added
    this.setState(state => ({
      debtsData: [
        newDebt,
        ...state.debtsData
      ],
      activateDebt: this.state.notesData.lehth > 0,
      isFirstDebt: this.state.notesData.lehth > 0
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
  editeDebt = (sum, description, added, key) => {
    this.setState(state => ({
      debtsData: state.debtsData.map(
        debt => (debt.id === +key ? {
          ...debt,
          sum,
          desc: description,
          date: added
        } : debt)
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
  handleDeleteDebt = id => {
    this.setState(state => ({
      debtsData: state.debtsData.filter(debt => debt.id !== id),
      activateDebt: this.state.notesData.lehth > 0,
      isFirstDebt: this.state.notesData.lehth > 0
    }))
  }
  addedItemInGallery = (date, name, desc, id) => {
    const itemGallery = {}
    itemGallery.id = id
    itemGallery.date = date
    itemGallery.name = name
    if (desc) itemGallery.note = desc
    this.setState(state => ({
      galleryData: [
        itemGallery,
        ...this.state.galleryData
      ]
    }))
  }

  showFields = () => this.setState({ isVisibleFields: true })
  hiddenNotes = () => this.setState({ isFirstNote: this.state.notesData.lehth > 0, activateNone: this.state.notesData.lehth > 0 })
  hiddenEmptyDepts = () => this.setState({ isFirstDebt: this.state.debtsData.lehth > 0, activateDebt: this.state.notesData.lehth > 0 })
  createFirstNote = () => this.setState({ isFirstNote: true, activateNone: true })
  createFirstDebt = () => this.setState({ isFirstDebt: true, activateDebt: true, showAddDebt: false })
  addingFirstItem = () => this.setState({ isFirstItemInGallery: true })
  getProfilePicture = value => {
    this.setState({ profilePic: value })
  }
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
    const isDebtsVisible = this.state.isVisibleFields || (config.data.debts && !!this.state.debtsData.length) || this.state.isFirstDebt
    const isEventVisible = this.state.isVisibleFields || (config.data.recent_appoinments && !!config.data.recent_appoinments.length)
    const isNotesVisible = this.state.isVisibleFields || (config.data.notes && !!this.state.notesData.length) || this.state.isFirstNote
    const isGalleryVisible = this.state.isVisibleFields || (config.data.gallery && !!config.data.gallery.length) || this.state.isFirstItemInGallery
    const isGroupsVisible = this.state.isVisibleFields || (config.data.groups && !!config.data.groups.length)
    // const isSignatureVisible = this.state.isVisibleFields
    // const isSocialNetworkVisible = this.state.isVisibleFields || (config.data.soc_media && !!config.data.soc_media.length)
    return (
      <div id='home'>
        <Topnav {...this.props} home />
        <Hero {...this.props} 
          profilePic={this.state.profilePic}
        />
        <HotLinks
          notesData={this.state.notesData}
          debtsData={this.state.debtsData}
          showAddGallery={this.state.showAddGallery}
          createFirstDebt={this.createFirstDebt}
          createFirstNote={this.createFirstNote}
          addingFirstItem={this.addingFirstItem}
          {...this.props}
        />
        <Profile {...this.props} 
          isVisibleFields={this.state.isVisibleFields}
          getProfilePicture={this.getProfilePicture}
        />
        {isEventVisible && <Events {...this.props} />}
        {/* {isDebtsVisible && <Debts
          hiddenEmptyDepts={this.hiddenEmptyDepts}
          createNewDebt={this.createNewDebt}
          editeDebt={this.editeDebt}
          deleteDebt={this.handleDeleteDebt}
          debtsData={this.state.debtsData}
          activateDebt={this.state.activateDebt}
          {...this.props}
        /> } */}
        {isNotesVisible && <Notes
          hiddenNotes={this.hiddenNotes}
          activateNone={this.state.activateNone}
          createNewNote={this.createNewNote}
          deleteNote={this.handleDeleteNote}
          editeNote={this.editeNote}
          notesData={this.state.notesData}
          {...this.props}
        />}
        <Media
          addedItemInGallery={this.addedItemInGallery}
          galleryData={this.state.galleryData}
          {...this.props}
        />
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
