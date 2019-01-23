import PunchHeader from '../panch-header/panch-header.jsx'
import './single-punch-page.styl'

export default class SinglePunchPage extends React.Component {
  daysLeft = () => {
    const now = moment()
    const end = moment(this.props.location.state.singlePunch.expiration)
    const duration = now.diff(end, 'day')
    console.log(duration)
    return duration
  }
  render () {
    this.daysLeft()
    console.log(this.props.location.state)
    const { singlePunch, length } = this.props.location.state
    return (
      <div id='single-punch-page'>
        <PunchHeader length={length} />
        <div className='single-punch-wrap'>
          <div className='single-punch'>
            {/* <button className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.delete}</button> */}
            <div className='punch-preview'>
              <p className='punch-name'><span style={{backgroundColor: 'black'}} className='service-color' />{singlePunch.service_name}</p>
              <div className='punch'>
                <p className='count'><span>{config.translations.used}</span><span className='uses'>{singlePunch.uses ? singlePunch.uses.length : '0'}</span><span className='of'>{config.translations.of}</span><span className='total' >{singlePunch.service_count}</span></p>
              </div>
              <div className={'sum ' + (config.isRTL && 'sum-rtl')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            {/* <button className='use-btn'>{config.translations.use}<img src={config.urls.media + 'check-circle.svg'} /></button> */}
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
            {singlePunch.uses && <div className='uses-wrap'>
              {singlePunch.uses.map((el, index) => (<div className='uses'>
                <div className='uses-date'><p>{moment(el.date).format('DD/MM/YYYY')}</p></div>
                <div className='number-select'>
                  <p>{index + 1}</p>
                  <img src={config.urls.media + 'checkbox-unmarked.svg'} />
                </div>
              </div>))}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}
