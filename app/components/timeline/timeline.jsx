import Appointment from './components/appointment/appointment.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Topnav from '../topnav/topnav.jsx'
import {array} from 'project-services'
import './timeline.styl'

let isEnd = ['appointments']
let count = 0

class Timeline extends React.Component {
  state = {
    flag: false,
    data: []
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    this.getData()
  }
  componentDidMount = () => this.init()
  init = () => {
    const list = this.refs.list
    const exp = () => {
      if (window.pageYOffset > document.body.clientHeight - (window.innerHeight * 2)) {
        !this.state.flag && this.setState({flag: true}, () => this.getData())
      }
    }
     list.addEventListener('touchmove', exp, false)
  }
  getData = () => {
    let data = array(isEnd, {
      e: moment().subtract(count * config.interval_days, 'days').format('YYYY-MM-DD'),
      s: moment().subtract((count + 1) * config.interval_days, 'days').format('YYYY-MM-DD')})
    if (data.length) {
      Promise.all(data).then(r => {
        data = r.reduce((arr, item) => arr.concat(item.data.map(i => {
          i.field_name = item.name
          return i
        })), [])
        data.sort((a, b) => moment(b.start) - moment(a.start))
        data[0].separator = true
        data.reduce((pI, cI) => {
          if (moment(pI.start).format('YYYY-MM-DD') !== moment(cI.start).format('YYYY-MM-DD')) cI.separator = true
          return cI
        })

        count++
        this.setState({flag: false, data: this.state.data.concat(data)})
      })
    } else this.setState({flag: false})
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />
    }
    // console.log('state.data', this.state.data)
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
          <div className={this.state.flag ? 'spiner-wrap' : 'hidden'}><img src={config.urls.media + 'spiner.webp'} /></div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
