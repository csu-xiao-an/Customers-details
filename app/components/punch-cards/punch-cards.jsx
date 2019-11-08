import PunchHeader from './components/panch-header/panch-header.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import { getPunchCards as getPunchCardsList } from 'project-services/punch.service.js'
import './punch-cards.styl'
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
class PunchCards extends React.Component {
  state = {
    punchsList: [...config.data.punch_cards],
    punch: {}
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    getPunchCardsList().then(punchsList => {
      punchsList.sort((a, b) => a.id - b.id).sort((a, b) => !!a.isActive - !!b.isActive)
        const punchCardsIds = config.data.punch_cards.map( card => card.id)
        let filtered = punchsList.filter(punch => !punchCardsIds.includes(punch.id))
      config.data.punch_cards.push(...filtered)
      this.setState({ punch: punchsList.find(i => i.isActive) || punchsList[0] || {},
        punchsList: [...punchsList] })
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }

  updatePunchList = punchsList => this.setState({ punchsList })
  updateSingle = () => {
    const punch = this.state.punchsList.reduce((active, item) => item.isActive ? item : active, null) || this.state.punchsList[0] || {}
    this.setState({ punch })
  }

  update = () => this.forceUpdate()

  addPunch = () => {
    this.props.history.push(baseUrl + config.urls.punch_cards_adding)
  }
  handleCardClick = item => {
    this.setState({punch: item},
      () => {
        this.props.history.push(baseUrl + config.urls.single_punch.replace('{punch_card_id}', item.id))
      }
    )
  }

  expiration = item => {
    if (item.expiration) {
      const now = moment()
      const end = moment(item.expiration)
      const duration = now.diff(end, 'day')
      return duration
    } else return false
  }

  renderPunchPreview = () => {
    return (
      <div id='wrap-punch'>
        { config.data.punch_cards.map(i => (
          <div className='punch-preview'>
            {this.expiration(i) > 0 && <div className={'expired-dates' + (config.isRTL ? ' expired-rtl' : ' expired-ltr')}>
              <span>{config.translations.punch_cards.preview_invalid_label.expired}</span>
            </div>}
            {i.uses && i.uses.length >= i.service_count && this.expiration(i) <= 0 && <div className={'expired-dates' + (config.isRTL ? ' expired-rtl' : ' expired-ltr')}>
              <span>{config.translations.punch_cards.preview_invalid_label.used}</span>
            </div>}
            <div className={'punchcard' + ((i.uses && i.uses.length >= i.service_count) || this.expiration(i) > 0 ? ' punchcard-full' : '')}
              onClick={() => this.handleCardClick(i)}>
              <p className={'punch-name' + (this.expiration(i) > 0 || (i.uses && i.uses.length >= i.service_count && this.expiration(i) <= 0) ? ' exp-name' : '')}>
                <span className='service-color' />{i.service_name}
              </p>
              <div className='punch'>
                <p className='count'><span>{config.translations.punch_cards.used_count_label.used}</span><span className='uses'>{i.uses ? i.uses.length : '0'}</span><span className='of'>{config.translations.punch_cards.used_count_label.of}</span><span className='total' >{i.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{i.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}punch-bg.jpg')`
    }
    return (
      <div id='punch_cards' style={bgrImg}>
        <PunchHeader length={this.state.punchsList.length} />
        <div className='preview-img'>
          <div className='preview-wrap'>
            {this.state.punchsList.length > 0
              ? <div className='full-page'>
                <h2>{config.translations.punch_cards.select_punch_card}</h2>
                {this.state.punchsList.length > 0 && this.renderPunchPreview()}
              </div>
              : <div className='empty-punch-card'>
                <div className='add-card-wrap' onClick={this.addPunch}>
                  <p>{config.translations.punch_cards.empty_punch_cards}</p>
                  <button className='punch-add-small'><img src={`${config.urls.media}plus-white.svg`} /></button>
                </div>
              </div>}
          </div>
        </div>
        <div className={'punch-add ' + (config.isRTL ? 'punch-add-rtl' : 'punch-add-ltr')} onClick={this.addPunch}><img src={`${config.urls.media}plus-white.svg`} /></div>
      </div>
    )
  }
}
export default AccessRights(PunchCards)
