import {lastAppoinment, Swiper} from 'project-components'
import Line from '../line/line.jsx'
import './events.styl'

export default class Events extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  price (i) {
    let sum = 0
    if (i.services.length > 1) {
      for (let c = 0; c < i.services.length; c++) sum += i.services[c].price
    } else { sum = i.services[0].price }
    return sum + '$'
  }
  duration (i) {
    let duration = 0
    if (i.services.length > 1) {
      for (let c = 0; c < i.services.length; c++) duration += i.services[c].duration
    } else { duration = i.services[0].duration }

    return moment(i.date).format('HH:mm') + ' - ' + moment(i.date).add(duration * 60 * 1000, 'milliseconds').format('HH:mm')
  }
  getHeaderTitle (i) {
    let string = ''
    let itemsCount = 0
    if (i.services.length > 1) {
      for (let c = 0; c < i.services.length; c++) {
        if ((string + i.services[c].name + ', ').length < 25) {
          string += i.services[c].name + ', '
        } else {
          itemsCount++
        }
      }
    } else { string = i.services[0].name }

    string = string.substring(0, string.length - 2)
    string += itemsCount > 0 ? ' (+' + itemsCount + ')' : ''

    return string
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
          {/* <a href={this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}> */}
          {/* <img className='clock' src={config.urls.media + 'clock.png'} /></a> */}
          {/* <h1 className={'label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.close_visits}</h1> */}
          <div id='swiper-wrap-notes'>
            <Swiper slidesPerView='auto' initialSlide={this.initialSlide()}>
              {/* <div> */}
              {/* <div className='note start-note'> */}
              {/* {config.translations.all_visits} */}
              {/* </div> */}
              {/* </div> */}
              {config.data.recent_appoinments.map((i, k) => (
                <div key={k}>
                  <div className='note'>
                    <div className='note-head'>
                      <img className='icon' src='./dist/media/ic_servise.svg' />
                      <span>{this.getHeaderTitle(i)}</span>
                    </div>
                      <div className='block1' >
                        <div className='dates'>
                          <div className='duration'>
                              <img className='icon' src='./dist/media/ic_time.svg' />
                              <span>{this.duration(i)}</span>
                          </div>
                          <div className='date'>
                              <img className='icon' src='./dist/media/ic_day.svg' />
                              <span>{moment(i.date).format('ddd, DD MMMM, Y')}</span>
                          </div>
                        </div>
                      </div>
                      <div className='block2' >
                          <span>{this.price(i)}</span>
                          <span className='min'>/&nbsp;summary</span>
                      </div>
                    {/* <h1 className='date'>{lastAppoinment(i.date)}</h1> */}
                    {/* <h1 className='procedure'>{i.services.length > 1 ? i.services.length + ' ' + config.translations.services : i.services[0].name}</h1> */}
                    {/* <h1 className='price'>{this.price(i)} {config.data.currency}</h1> */}
                  </div>
                </div>)
              )}
              {/* <div><div className='note end-note'> */}
              {/* <h1 className='date'><span className='orange'>before</span> week</h1> */}
              {/* <h1 className='procedure'>Laser hair removal</h1> */}
              {/* <h1 className='price'>450 {config.data.currency}</h1> */}
              {/* </div></div> */}
              {/* TODO dynamic */}
            </Swiper>
          </div>
        </div>
        {/* <Line /> */}
      </div>
    )
  }
}
