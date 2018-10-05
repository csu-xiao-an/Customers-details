import {lastAppoinment, Swiper} from 'project-components'
import Line from '../line/line.jsx'
import './events.styl'

export default class Events extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  // price (i) {
  //   let sum = 0
  //   if (i.length > 1) {
  //     for (let c = 0; c < i.length; c++) sum += i[c].total_price
  //   } else { sum = i[0].total_price }
  //   return sum + config.data.currency
  // }
  //   duration (i) {
  //     let duration = 0
  //     if (i.services.length > 1) {
  //       for (let c = 0; c < i.services.length; c++) duration += i.services[c].duration
  //     } else { duration = i.services[0].duration }
  //     return `${moment(i.start).format('HH:mm')}-${moment(i.end).subtract(moment(i.start)).format('HH:mm')}`
  // }
  // duration (i) {
  //   const duration = i.services.reduce((sum, item) => sum + (item.duration || 0), 0)
  //   return moment(i.start).format('HH:mm') + ' - ' + moment(i.start).add(duration, 'minutes').format('HH:mm')
  // }
  getColorLine (i) {
    let nextNum = 0
    let colorStr = ''
    let filteredColor = i.services.filter(i => !!i.color)
    let oneColorHeight = (100 / (filteredColor.length).toFixed(2))
    filteredColor.map((i, k) => {
      colorStr += ', ' + (i.color || '') + ' ' + nextNum + '%, ' + (i.color || '') + ' ' + (
        parseFloat(nextNum) + parseFloat(oneColorHeight)) + '%'
      nextNum = parseFloat(nextNum) + parseFloat(oneColorHeight)
    })
    let leftBorder = {
      borderImage: 'linear-gradient(to bottom' + colorStr + ') 1 100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRight: 'navajowhite'
    }
    let BorderNone = {
      borderImage: '',
      borderWidth: '',
      borderStyle: '',
      borderRight: ''
    }
    return (colorStr ? leftBorder : BorderNone)
  }
  getHeaderTitle (i) {
    let string = ''
    let itemsCount = 0
    if (i.services.length > 1) {
      for (let c = 0; c < i.services.length; c++) {
        if ((string + i.services[c].name + ', ').length > 0) {
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
      if (moment() > moment(i.date)) { slide = k; return false } else return true
    })
    return slide
  }
  componentWillMount = () => {
    if (!Array.isArray(config.data.recent_appoinments)) config.data.recent_appoinments = []
    config.data.recent_appoinments.sort((a, b) => moment(a.date) - moment(b.date))
  }
  render () {
    return (
      <div id='events'>
        <div className='events'>
          {/* <a href={this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}> */}
          {/* <img className='clock' src={config.urls.media + 'clock.png'} /></a> */}
          {/* <h1 className={'label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.close_visits}</h1> */}
          <div id='swiper-wrap-notes'>
            <div className='event-header'>
              <label>{config.translations.close_queue}</label>
            </div>
            <Swiper slidesPerView='auto'
              initialSlide={this.initialSlide()}
              slidesOffsetBefore={0}
              slidesOffsetAfter={-3}>
              {config.data.recent_appoinments.map((i, k) => (
                <div key={k}>
                  <a href={`${config.urls.calendar_link}?appointment_id=${config.data.recent_appoinments[k].id}`}>
                    <div className='note' style={this.getColorLine(i)} >
                      <div className='note-head'>
                        <img className='icon' src={config.urls.media + 'ic_servise.svg'} />
                        <span>{this.getHeaderTitle(i)}</span>
                      </div>
                      <div className='block1' >
                        <div className='dates'>
                          <div className='duration'>
                            <img className='icon' src={config.urls.media + 'ic_time.svg'} />
                            <span>{`${moment(i.start).format('HH:mm')} - ${moment(i.end).format('HH:mm')}`}</span>
                          </div>
                          <div className='date'>
                            <img className='icon' src={config.urls.media + 'ic_day.svg'} />
                            <span>{moment(i.start).format('ddd, DD MMMM, Y')}</span>
                          </div>
                        </div>
                      </div>
                      <div className='block2' >
                        <span>{i.total_price}{config.data.currency}</span>
                        <span className='min'>/&nbsp;{config.translations.summary}</span>
                      </div>
                    </div>
                  </a>
                </div>)
              )}
            </Swiper>
            <a href={this.props.rights.events.cr_app
              ? `${config.urls.main}${config.urls.appointment}?client_id=${config.data.id}&worker_id=${config.user.worker_id}`
              : false}>
              <div className='event-footer'>
                <label>{config.translations.add_new_queue}</label>
                <img className='add' src={config.urls.media + 'c_add_stroke.svg'} />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
