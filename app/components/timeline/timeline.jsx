import Appointment from './components/appointment/appointment.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Topnav from '../topnav/topnav.jsx'
import {getTimeline} from 'project-services'
import './timeline.styl'

const urlParams = ['appointments', 'sms', 'notes']

class Timeline extends React.Component {
  state = {
    flag: false,
    data: []
  }
  // count = 0

  componentDidMount = () => {
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    config.plugins_list.forEach(i => urlParams.push(i))
    this.getData(true, true)
    this.init()
  }

  init = () => {
    const list = this.refs.list
    const exp = () => {
      if (window.pageYOffset > list.scrollHeight - (document.body.clientHeight + document.body.clientHeight / 2)) {
        !this.state.flag && this.getData()
      }
    }
    list.addEventListener('touchmove', exp, false)
  }

  autoUploadUntilFullPage = () => {
    const { offsetHeight } = this.refs.list
    const { clientHeight: ch } = document.body
    if (offsetHeight <= ch) { // 1.5 page size. Universal value
      this.getData(false, Math.pow(config.interval_days, 2))
    }
  }

  getData = (firstLoad, fullPageCoef) => {
    this.setState({flag: true})
    const getDate = (value, date) => moment(date).subtract(value, 'days').format('YYYY-MM-DD')
    let start
    let end
    if (firstLoad) {
      // config.interval_days
      start = getDate(config.interval_days)
      end = getDate(0)
    } else if (fullPageCoef) {
      end = getDate(1, this.lastStartDate)
      start = getDate(fullPageCoef, end)
      if (moment(start).isBefore(config.data.registration_date)) {
        start = getDate(0, config.data.registration_date)
        fullPageCoef = 0 // Exit from auto fill page
      }
    } else {
      start = getDate(config.interval_days, this.lastStartDate)
      end = getDate(1, this.lastStartDate)
      if (moment(start).isBefore(config.data.registration_date)) {
        start = getDate(0, config.data.registration_date)
        fullPageCoef = 0 // Exit from auto fill page
      }
    }
    this.lastStartDate = start
    this.lastEndDate = end
    getTimeline(urlParams, { end, start }).then(res => {
      let data = res.appointments
      // let keys = Object.keys(res)
      // let testData = keys.map(i => {
      //   let a = [...res[i]]
      //   return a
      // })
      // let data = testData.reduce((arr, item) => arr.concat(item.map(i => {
      //   console.log('i', i)
      //   if (!i.date) {
      //     i.date = moment(i.start).format('YYYY-MM-DD')
      //   }
      // if (!this.state.filter.sms && i.field_name === 'sms') { i.isHide = true } else
      // if (!this.state.filter.notes && i.field_name === 'notes') { i.isHide = true } else
      // if (!this.state.filter.appointments && i.field_name === 'appointments') { i.isHide = true }
      //   return i
      // })), [])
      if (data.length) {
        data.sort((a, b) => moment(b.start) - moment(a.start))
        data[0].separator = true
        const format = date => moment(date).format('YYYY-MM-DD')
        data.reduce((pI, cI) => {
          if (format(pI.start) !== format(cI.start)) cI.separator = true
          return cI
        })
      }
      this.setState(
        {flag: false, data: [...this.state.data, ...data]},
        () => fullPageCoef && this.autoUploadUntilFullPage()
      )
    })
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} timeline />
        <div className='list' ref='list'>
          {this.state.data.length > 0 && this.state.data.map(i => <div>
            {i.separator && <div className='separator-wrap'><div className='separator'>
              <span className='date_weekday'>{`${config.translations.dates.weekdays[moment(i.start).get('day')]},`}</span>
              <span className='date_month'>{config.translations.dates.months[moment(i.start).get('month')]}</span>
              <span className='date_day'>{moment(i.start).format('DD')}</span>
            </div>
            </div>}
            { fields[i.field_name] && fields[i.field_name](i) }
          </div>)}
          <div className={this.state.flag ? 'preloader' : 'hidden'}>
            <div className='loader' />
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
