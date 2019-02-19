import PunchHeader from '../panch-header/panch-header.jsx'
import {punchPostServiceUse, punchDeleteService, getPunchCardsList} from 'project-services'
import './single-punch-page.styl'
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
export default class SinglePunchPage extends React.Component {
  state = {
    punchsList: [],
    singlePunch: {}
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  componentWillMount = () => {
    getPunchCardsList().then(punchsList => {
      this.setState({punchsList}, () => {
        this.setState({
          singlePunch: this.state.punchsList.find(i => i.id === +this.props.match.params.punch_card_id) || {},
          uses: this.state.punchsList.find(i => i.id === +this.props.match.params.punch_card_id).uses || []
        })
      })
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }

  daysLeft = () => {
    const now = moment()
    const end = moment(this.state.singlePunch && this.state.singlePunch.expiration)
    const duration = now.diff(end, 'day')
    return duration
  }
  del = () => punchDeleteService(this.state.singlePunch.id)
    .then(r => {
      if (r.status === 204) {
        this.props.history.push(baseUrl + config.urls.punch_cards)
      }
    })
  update = () => this.forceUpdate()
  use = () => {
    const d = moment().format('YYYY-MM-DD hh:mm:ss')
    punchPostServiceUse(this.state.singlePunch.id, `date=${d}`).then(r => r.json().then(r =>
      this.setState(state => ({ uses: [{ id: r, date: d }, ...state.uses] }))))
  }
  render () {
    const { singlePunch = {}, uses = [] } = this.state
    const sortUses = uses.sort((a, b) => moment(b.date) - moment(a.date))
    return (
      <div id='single-punch-page'>
        <PunchHeader length={this.state.punchsList.length} />
        <div className='single-punch-wrap'>
          <div className={'single-punch ' + (this.daysLeft() > 0 && 'expired')}>
            {/* <button onClick={() => this.del()} className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.delete}</button> */}
            <div className='punch-preview'>
              <p className='punch-name'><span style={{backgroundColor: 'black'}} className='service-color' />{singlePunch.service_name}</p>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span><span className='uses'>{uses ? uses.length : '0'}</span><span className='of'>{config.translations.of}</span><span className={'total ' + (this.daysLeft() > 0 && 'unused')} >{singlePunch.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            {/* {this.daysLeft() > 0
              ? <button className='expiry-btn'>{config.translations.expiry_dates}</button>
              : <button className='use-btn' onClick={(this.state.uses && this.state.uses.length === singlePunch.service_count) || this.daysLeft() > 0 ? () => {} : this.use} >{config.translations.use}<img src={config.urls.media + 'check-circle.svg'} /></button>} */}
            {singlePunch.expiration && <div className='expiry-date'>
              <div className='img-wrap'><img src={config.urls.media + 'calendar.svg'} /></div>
              {this.daysLeft() > 0 ? <div className='expiry-text'>
                <p>{config.translations.expiry_date}</p>
                <p className='expiry-formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
              </div> : <div className='expiry-text'>
                <p>{config.translations.expiry_date}</p>
                <p className='formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
                <p>{config.translations.within}</p>
                <p className='days-left'>{this.daysLeft() * (-1)}</p>
                <p>{config.translations.days}</p>
              </div>}
            </div>}
            {uses && <div className='uses-wrap'>
              {sortUses.map((el, index) => (<div className='uses'>
                <div className='uses-date'><p>{moment(el.date).format('DD/MM/YYYY')}</p></div>
                <div className='number-select'>
                  <p>{uses.length - [index]}</p>
                  <img className={this.daysLeft() > 0 ? 'expiry-checkbox' : 'checkbox'} src={config.urls.media + 'checkbox-select.svg'} />
                </div>
              </div>))}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
