import Appointment from './components/appointment/appointment.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Dept from './components/dept/dept.jsx'
import Note from './components/note/note.jsx'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import {array} from 'project-services'
import './timeline.styl'

let isEnd = ['appointments', 'gallery', 'dept', 'note', 'sms']
let count = 0

class Timeline extends React.Component {
  state = {
    flag: false,
    data: [],
    filter: {
      appointments: true,
      gallery: true,
      dept: true,
      other: true
    }
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
    list.addEventListener('touchstart', exp, false)
    list.addEventListener('touchmove', exp, false)
    list.addEventListener('touchend', exp, false)
  }
  getData = () => {
    let data = array(isEnd, {
      e: moment().subtract(count * 7, 'days').format('YYYY-MM-DD'),
      s: moment().subtract((count + 1) * 7, 'days').format('YYYY-MM-DD')})
    if (data.length > 0) {
      Promise.all(data).then(r => {
        isEnd = r.filter(i => !i.is_end).map(i => i.name)
        data = r.reduce((arr, item) => arr.concat(item.data.map(i => {
          i.field_name = item.name
          if (!this.state.filter.appointments && i.field_name === 'appointments') { i.isHide = true } else
          if (!this.state.filter.gallery && i.field_name === 'gallery') { i.isHide = true } else
          if (!this.state.filter.dept && i.field_name === 'dept') { i.isHide = true } else
          if (!this.state.filter.other && (i.field_name === 'note' || i.field_name === 'sms')) { i.isHide = true }
          i.deleted_date ? i.sort = i.deleted_date : i.modified_date ? i.sort = i.modified_date : i.sort = i.date
          return i
        })), [])
        data.sort((a, b) => moment(b.sort) - moment(a.sort))
        data[0].separator = true
        data.reduce((pI, cI) => {
          if (moment(pI.date).format('YYYY-MM-DD') !== moment(cI.date).format('YYYY-MM-DD')) cI.separator = true
          return cI
        })
        count++
        this.setState({flag: false, data: this.state.data.concat(data)})
      })
    } else {
      this.setState({flag: false})
    }
  }
  filter = p => {
    const f = b => {
      this.setState({data: this.state.data.map(i => {
        if (p !== 'other' && i.field_name === p) { i.isHide = b } else
        if (p === 'other' && (i.field_name === 'sms' || i.field_name === 'note')) i.isHide = b
        return i
      }),
      filter: { ...this.state.filter, [p]: !b }})
    }
    this.state.filter[p] ? f(true) : f(false)
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      dept: i => <Dept i={i} {...this.props} />,
      note: i => <Note i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} timeline />
        <div className='list' ref='list'>
          {this.state.data.length > 0 && this.state.data.map(i => !i.isHide && <div>
            {i.separator && <div className='separator-wrap'><div className='separator'>
              {config.translations.dates.weekdays[moment(i.date).get('day')] + ' ' + moment(i.date).format('YYYY-MM-DD')}</div></div>}
            {fields[i.field_name](i)}</div>)}
          <div className={this.state.flag ? 'spiner-wrap' : 'hidden'}>
            <img src={config.urls.media + 'spiner.webp'} />
          </div>
        </div>
        <div className='buttons-wrap'>
          <div onClick={() => this.filter('appointments')}>
            <img className={this.state.filter.appointments ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.appointment}</h1>
          </div>
          {config.plugins_list.some(i => i === 'gallery') && this.props.rights.timeline.isVisibleGalleryButton &&
          <div onClick={() => this.filter('gallery')}>
            <img className={this.state.filter.gallery ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.gallery}</h1>
          </div>}
          {config.plugins_list.some(i => i === 'depts') && <div onClick={() => this.filter('dept')}>
            <img className={this.state.filter.dept ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.debts_t}</h1>
          </div>}
          <div onClick={() => this.filter('other')}>
            <img className={this.state.filter.other ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.other_t}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
