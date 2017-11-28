import {lastAppoinment, Swiper} from 'project-components'
import Line from '../line/line.jsx'
import './events.styl'

export default class Events extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  price (i) {
    let sum = 0
    if (i.procedures.length > 1) {
      for (let c = 0; c < i.procedures.length; c++) sum += i.procedures[c].price
    } else { sum = i.procedures[0].price }
    return sum
  }
  initialSlide = () => {
    let slide
    config.data.recent_appoinments && config.data.recent_appoinments.every((i, k) => {
      if (moment() < moment(i.date)) { slide = k; return false } else return true
    })
    return slide
  }
  componentWillMount = () => {
    if (!Array.isArray(config.data.recent_appoinments)) config.data.recent_appoinments = []
    config.data.recent_appoinments.sort((a, b) => moment(a.date) - moment(b.date))
  }
  render () {
    return (
      <div id={config.data.recent_appoinments.length > 0 ? 'events' : 'hidden'}>
        <div className='events'>
          <a href={this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}>
            <img className='clock' src={config.urls.media + 'clock.png'} /></a>
          <h1 className={'label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.close_visits}</h1>
          <div id='swiper-wrap-notes'>
            <Swiper pagination='.swiper-pagination' slidesPerView='auto' initialSlide={this.initialSlide()}>
              <div><div className='note start-note'>{config.translations.all_visits}</div></div>
              {config.data.recent_appoinments.map((i, k) => (
                <div key={k}>
                  <div className='note'>
                    <h1 className='date'>{lastAppoinment(i.date)}</h1>
                    <h1 className='procedure'>{i.procedures.length > 1 ? i.procedures.length + ' ' + config.translations.procedures : i.procedures[0].name}</h1>
                    <h1 className='price'>{this.price(i)} {config.data.currency}</h1>
                  </div>
                </div>)
              )}
              <div><div className='note end-note'>
                <h1 className='date'><span className='orange'>before</span> week</h1>
                <h1 className='procedure'>Laser hair removal</h1>
                <h1 className='price'>450 {config.data.currency}</h1>
              </div></div>
              {/* TODO dynamic */}
            </Swiper>
          </div>
        </div>
        <Line />
      </div>
    )
  }
}
