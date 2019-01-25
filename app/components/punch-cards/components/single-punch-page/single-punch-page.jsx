import PunchHeader from '../panch-header/panch-header.jsx'
// import {punchDeleteService, punchDeleteServiceUse} from 'project-services'
import {punchPostServiceUse, punchDeleteService} from 'project-services'
import './single-punch-page.styl'
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
export default class SinglePunchPage extends React.Component {
  state = {
    punchsList: this.props.location.state.punchsList,
    uses: this.props.location.state.singlePunch.uses ? this.props.location.state.singlePunch.uses : ''
  }

  daysLeft = () => {
    const now = moment()
    const end = moment(this.props.location.state.singlePunch.expiration)
    const duration = now.diff(end, 'day')
    return duration
  }
  updatePunchList = punchsList => this.setState({ punchsList })
  del = () => punchDeleteService(this.props.location.state.singlePunch.id)
    .then(r => {
      if (r.status === 204) {
        this.props.history.push(baseUrl + config.urls.punch_cards)
      }
    })
  update = () => this.forceUpdate()
  use = () => {
    const d = moment().format('YYYY-MM-DD hh:mm:ss')
    punchPostServiceUse(this.props.location.state.singlePunch.id, `date=${d}`).then(r => r.json().then(r =>
      this.setState(state => ({ uses: [{ id: r, date: d }, ...state.uses] })) && this.update()))
  }
  render () {
    const { singlePunch, length } = this.props.location.state
    return (
      <div id='single-punch-page'>
        <PunchHeader length={length} />
        <div className='single-punch-wrap'>
          <div className='single-punch'>
            <button onClick={() => this.del()} className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.delete}</button>
            <div className='punch-preview'>
              <p className='punch-name'><span style={{backgroundColor: 'black'}} className='service-color' />{singlePunch.service_name}</p>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span><span className='uses'>{this.state.uses ? this.state.uses.length : '0'}</span><span className='of'>{config.translations.of}</span><span className='total' >{singlePunch.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            <button className='use-btn' onClick={(this.state.uses && this.state.uses.length === singlePunch.service_count) || this.daysLeft() > 0 ? () => {} : this.use} >{config.translations.use}<img src={config.urls.media + 'check-circle.svg'} /></button>
            <div className='expiry-date'>
              <div className='img-wrap'><img src={config.urls.media + 'calendar.svg'} /></div>
              <div className='expiry-text'>
                <p>{config.translations.expiry_date}</p>
                <p className='formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
                <p>{config.translations.within}</p>
                <p className='days-left'>{this.daysLeft() * (-1)}</p>
                <p>{config.translations.days}</p>
              </div>
            </div>
            {this.state.uses && <div className='uses-wrap'>
              {this.state.uses.map((el, index) => (<div className='uses'>
                <div className='uses-date'><p>{moment(el.date).format('DD/MM/YYYY')}</p></div>
                <div className='number-select'>
                  <p>{this.state.uses.length - [index]}</p>
                  <img src={config.urls.media + 'checkbox-empty.svg'} />
                </div>
              </div>))}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
