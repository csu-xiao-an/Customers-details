import './appointments.styl'

export default class Appoinments extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  total = () => {
    let p = 0
    let d = 0
    this.props.i.procedures.forEach(i => {
      d += i.duration
      p += i.price
    })
    return {d: d, p: p}
  }
  render () {
    return (
      <div id='appoinments'>
        <div className='order-in'>{config.translations.appointment_creted.replace('{time}', moment(this.props.i.date).format('HH:hh'))}</div>
        <div className='date'>
          <div className='date-img'>
            <img src={config.urls.media + 'calendar.png'} />
          </div>
          <h1 className='date-label'>{config.translations.appointment_at + ':'}</h1>
          <h1 className='date-data'>{moment(this.props.i.added_date).format('MM.DD') + ' ' + moment(this.props.i.added_date).format('HH:hh')}</h1>
        </div>
        <div className='worker'>
          <div className='worker-img'>
            <img ref='worker_img' onError={() => { this.refs.worker_img.src = config.urls.media + 'default.jpg' }}
              src={config.urls.main + config.urls.worker_img.replace('{worker_id}', this.props.i.worker_id)} />
          </div>
          <h1 className='worker-label'>{config.translations.worker + ':'}</h1>
          <h1 className='worker-name'>{this.props.i.worker_name}</h1>
        </div>
        <div className='procedures-count'>
          <div className='img'>
            <img src={config.urls.media + 'elixir.png'} />
          </div>
          <h1 className='count'>{config.translations.procedures_timeline + '('}<span>{this.props.i.procedures.length}</span>{')'}</h1>
        </div>
        <div className='procedures-list'>
          {this.props.i.procedures.map(i => <div>
            <div className='icon-wrap'><div className='icon' style={{backgroundColor: i.color}} /></div>
            <h1 className='name'>{i.name}</h1>
            <h1 className='duration'>{i.duration + ' ' + config.translations.hours}</h1>
            <h1 className='price'>{i.price + ' ' + config.data.currency}</h1>
          </div>)}
          <div className='total'>
            <h1 className='total-duration'>{this.total().d + ' ' + config.translations.hours}</h1>
            <h1 className='total-price' style={config.isRtL ? {marginLeft: '12px'} : {marginRight: '12px'}}>{this.total().p + ' ' + config.data.currency}</h1>
          </div>
        </div>
        <div className={this.props.i.note ? 'notes' : 'hidden'}>
          <h1 className='notes-label'>{config.translations.note}</h1>
          <h1 className='note'>{this.props.i.note}</h1>
        </div>
        <div className={this.props.i.address ? 'adress' : 'hidden'}>
          <div className='data'>
            <h1 className='meet'>{config.translations.meeting}</h1>
            <h1 className='label'>{config.translations.adress + ':'}</h1>
            <h1 className='address'>{this.props.i.address}</h1>
          </div>
          <div className='icon'><img src={config.urls.media + 'icon-adress.png'} /></div>
        </div>
      </div>
    )
  }
}
