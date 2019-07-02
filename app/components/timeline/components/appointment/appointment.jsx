import './appointment.styl'

export default class Appointment extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }

  state = {
    expand: false
  }

  total = () => {
    let o = {p: 0, d: 0}
    this.props.i.services.forEach(i => {
      o.d += i.duration
      o.p += i.price
    })
    return o
  }
  onError = e => {
    if (!e.target.src.endsWith(config.urls.defaultClientImg)) {
      e.target.src = config.urls.defaultPathToClientImg + config.urls.defaultClientImg
    }
  }
  dateFormat = date => {
    moment.locale(config.locale)
    return moment(date).format('ddd, MMMM DD')
  }
  render () {
    return (
      <div id='appoinments'>
        <p className='order-in'>
          {config.translations.timeline.appointment.appointment_created}
          {/* <span className='date_weekday'>{`${config.translations.dates.weekdays[moment(this.props.i.added_date).get('day')]},`}</span>
          <span className='date_month'>{config.translations.dates.months[moment(this.props.i.added_date).get('month')]}</span> */}
          <span className='date_day'>{this.dateFormat(this.props.i.added_date)}</span>
        </p>
        <div className='date-wrap'>
          <div className='date'>
            <div className='date-day'>
              <img src={`${config.urls.media}ic-day.svg`} />
              <span>{this.dateFormat(this.props.i.start)}</span>
            </div>
            <div className='date-time'>
              <img src={`${config.urls.media}ic_time.svg`} />
              <span>{`${moment(this.props.i.start).format('HH:mm')} - ${moment(this.props.i.end).format('HH:mm')}`}</span>
            </div>
          </div>
          {this.props.i.is_deleted && <div className='cancel-wrap'>
            <span className='cancel'>{config.translations.timeline.appointment.canceled_lable}</span>
          </div>}
        </div>
        {config.plugins_list.includes('multiple_workers') && <div className='worker-info'>
          <p className='worker-label'>{config.translations.timeline.appointment.employer_label}</p>
          <div className='worker'>
            <img src={config.urls.main + config.urls.worker_img.replace('{worker_profile_img}', this.props.i.worker_profile_image)} onError={e => { this.onError(e) }} />
            <span className='worker-name'>{this.props.i.worker_name}</span>
          </div>
        </div>}
        <p className='procedures'>{config.translations.timeline.appointment.procedures_label}</p>
        <div className='service-wrap'>
          <div className='procedures-list'>
            {this.props.i.services && this.props.i.services.map(i => <div className='procedures-item'>
              <div className='service'>
                <span className='icon' style={{backgroundColor: i.color}} />
                <span className='name'>{i.name + (i.count > 1 ? (' ⨯ ' + i.count) : '')}</span>
              </div>
            </div>
            )}
          </div>
          {this.props.i.total_price && <p className='total-price'><span className='price'>{this.props.i.total_price}</span>{config.data.currency}</p>}
        </div>
        <div className={this.props.i.note ? 'note' : 'hidden'}>
          <div className='title'>
            <span>{`${config.translations.timeline.appointment.note_label}`}</span>
          </div>
          <div className='gallery-note'>
            <div className='note-txt'>
              <p className={this.state.expand ? '' : 'ellipsis'}>{this.props.i.note}</p>
            </div>
            <div className='text-expand'>
              <span><img className={this.state.expand ? 'rotate' : ''} src={`${config.urls.media}ic-expand.svg`} onClick={() => this.setState({ expand: !this.state.expand })} /></span>
            </div>
          </div>
        </div>
        <div className={this.props.i.location ? 'address' : 'hidden'}>
          <div className='data'>
            <p className='meet'>{config.translations.timeline.appointment.location_label}</p>
            <p className='address'>{this.props.i.location}</p>
          </div>
          <div className='icon'>
            <a className='map-link' href={config.urls.google_maps.replace('{address}', this.props.i.location)}>
              <img src={config.urls.media + 'icon-address.png'} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
