import Appointment from './components/appointment/appointment.jsx'
import PunchCard from './components/punch-card/punch-card.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Debt from './components/debt/debt.jsx'
import Note from './components/note/note.jsx'
// import { Swiper } from 'project-components'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import {array} from 'project-services'
import './timeline.styl'

let isEnd = ['appointments', 'notes', 'sms']
let count = 0

class Timeline extends React.Component {
  state = {
    filter: {
      appointments: true,
      punch_cards: true,
      gallery: true,
      other: true,
      debts: true,
      sms: true,
      notes: true

    },
    flag: false,
    data: []
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    config.plugins_list.forEach(i => i !== 'colors_beautech' && isEnd.push(i)) // TODO colors_beautech
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
    if (data.length) {
      Promise.all(data).then(r => {
        isEnd = r.filter(i => !i.is_end).map(i => i.name.replace('depts', 'debts'))
        data = r.reduce((arr, item) => arr.concat(item.data.map(i => {
          i.field_name = item.name
          // if (!this.state.filter.other && (i.field_name === 'notes' || i.field_name === 'sms')) { i.isHide = true } else
          if (!this.state.filter.sms && i.field_name === 'sms') { i.isHide = true } else
          if (!this.state.filter.notes && i.field_name === 'notes') { i.isHide = true } else
          if (!this.state.filter.appointments && i.field_name === 'appointments') { i.isHide = true } else
          if (!this.state.filter.punch_cards && i.field_name === 'punch_cards') { i.isHide = true } else
          if (!this.state.filter.gallery && i.field_name === 'gallery') { i.isHide = true } else
          if (!this.state.filter.debts && i.field_name === 'debts') i.isHide = true
          i.uses && i.uses.length > 0 && i.uses.sort((a, b) => moment(b.date) - moment(a.date))
          i.deleted_date ? i.sort = i.deleted_date : i.modified_date ? i.sort = i.modified_date
            : i.uses && i.uses.length > 0 ? i.sort = i.uses[0].date : i.date ? i.sort = i.date : i.sort = i.added_date
          return i
        })), [])
        let obj = {}
        data.forEach(i => { obj[i.id + i.date] = i })
        data = Object.values(obj)
        data.sort((a, b) => moment(b.date) - moment(a.date))
        if (data.length > 0) {
          data[0].separator = true
          data.reduce((pI, cI) => {
            if (moment(pI.date).format('YYYY-MM-DD') !== moment(cI.date).format('YYYY-MM-DD')) cI.separator = true
            return cI
          })
        }
        count++
        this.setState({flag: false, data: this.state.data.concat(data)})
      })
    } else this.setState({flag: false})
  }
  filter = p => {
    const f = b => {
      this.setState({data: this.state.data.map(i => {
        if (p !== 'other' && i.field_name === p) { i.isHide = b } else
        if (p === 'sms' && i.field_name === 'sms') { i.isHide = b } else
        if (p === 'notes' && i.field_name === 'notes') { i.isHide = b }
        // if (p === 'other' && (i.field_name === 'sms' || i.field_name === 'notes')) i.isHide = b
        return i
      }),
      filter: { ...this.state.filter, [p]: !b }})
    }
    this.state.filter[p] ? f(true) : f(false)
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />,
      punch_cards: i => <PunchCard i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      depts: i => <Debt i={i} {...this.props} />,
      notes: i => <Note i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} timeline />
        <div className='list' ref='list'>
          {this.state.data.length > 0 && this.state.data.map(i => !i.isHide && <div>
            {i.separator && <div className='separator-wrap'><div className='separator'>
              <span className='date_weekday'>{`${config.translations.dates.weekdays[moment(i.date).get('day')]},`}</span>
              <span className='date_month'>{config.translations.dates.months[moment(i.date).get('month')]}</span>
              <span className='date_day'>{moment(i.date).format('DD')}</span>
            </div>
            </div>}
            {fields[i.field_name] && fields[i.field_name](i)}
          </div>)}
          <div className={this.state.flag ? 'spiner-wrap' : 'hidden'}><img src={config.urls.media + 'spiner.webp'} /></div>
        </div>
        <div className='buttons-wrap'>
          <div onClick={() => this.filter('appointments')}>
            <img className={`mark ${this.state.filter.appointments ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-q.svg`} />
            <span>{config.translations.queues}</span>
          </div>
          {config.plugins_list.some(i => i === 'gallery') && this.props.rights.timeline.isVisibleGalleryButton &&
          <div onClick={() => this.filter('gallery')}>
            <img className={`mark ${this.state.filter.gallery ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-g.svg`} />
            <span>{config.translations.gallery}</span>
          </div>}
          {config.plugins_list.some(i => i === 'debts') && <div onClick={() => this.filter('debts')}>
            <img className={`mark ${this.state.filter.debts ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-d.svg`} />
            <span>{config.translations.debts_t}</span>
          </div>}
          {/* <div onClick={() => this.filter('other')}>
            <img className={this.state.filter.other ? '' : 'nVisible'} src={config.urls.media + 'ic-mark.svg'} />
            <span>{config.translations.other_t}</span>
          </div> */}
          {config.plugins_list.some(i => i === 'punch_cards') && <div onClick={() => this.filter('punch_cards')}>
            <img className={`mark ${this.state.filter.punch_cards ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-sub.svg`} />
            <span>{config.translations.punch_cards}</span>
          </div>}
          <div onClick={() => this.filter('notes')}>
            <img className={`mark ${this.state.filter.notes ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-n.svg`} />
            <span>{config.translations.note_t}</span>
          </div>
          <div onClick={() => this.filter('sms')}>
            <img className={`mark ${this.state.filter.sms ? '' : 'nVisible'}`} src={config.urls.media + 'ic-mark.svg'} />
            <img className='main-img' src={`${config.urls.media}ic-s.svg`} />
            <span>{config.translations.sms_t}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
