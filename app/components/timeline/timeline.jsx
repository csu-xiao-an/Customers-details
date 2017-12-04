import Appointment from './components/appointment/appointment.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Dept from './components/dept/dept.jsx'
import Note from './components/note/note.jsx'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import {array} from 'project-services'
import './timeline.styl'

class Timeline extends React.Component {
  state = {
    flag: true,
    data: [],
    filter: {
      appointment: true,
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
  }
  render () {
    const fields = {
      appointments: i => <Appointment i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      dept: i => <Dept i={i} {...this.props} />,
      note: i => <Note i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    let data = array(this.state.filter, {s: '2017-01-01', e: '2017-01-07'})
    if (data.length > 0) {
      Promise.all(data)
        .then(r => {
          data = r.reduce((arr, item) =>
            arr.concat(item.data.map(i => { i.field_name = item.name; return i })), [])
          data.sort((a, b) => moment(b.date) - moment(a.date))
          data[0].separator = true
          data.reduce((pI, cI) => {
            if (moment(pI.date).format('YYYY-MM-DD') !== moment(cI.date).format('YYYY-MM-DD')) { cI.separator = true }
            return cI
          })
          this.state.flag && this.setState({data, flag: false})
        })
    } else {
      this.state.flag && this.setState({data: [], flag: false})
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} />
        <div className='list'>{this.state.data.length > 0 && this.state.data.map(i => <div>
          {i.separator && <div className='separator-wrap'><div className='separator'>
            {config.translations.dates.weekdays[moment(i.date).get('day')] + ' ' + moment(i.date).format('YYYY-MM-DD')}</div></div>}
          {fields[i.field_name](i)}</div>)}
        </div>
        <div className='test' />
        <div className='buttons-wrap'>
          <div onClick={() => this.setState({flag: true, filter: { ...this.state.filter, appointment: !this.state.filter.appointment }})}>
            <img className={this.state.filter.appointment ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.appointment}</h1>
          </div>
          {config.plugins_list.some(i => i === 'gallery') && this.props.rights.timeline.isVisibleGalleryButton && <div onClick={() => this.setState({flag: true, filter: { ...this.state.filter, gallery: !this.state.filter.gallery }})}>
            <img className={this.state.filter.gallery ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.gallery}</h1>
          </div>}
          {config.plugins_list.some(i => i === 'depts') && <div onClick={() => this.setState({flag: true, filter: { ...this.state.filter, dept: !this.state.filter.dept }})}>
            <img className={this.state.filter.dept ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.debts_t}</h1>
          </div>}
          <div onClick={() => this.setState({flag: true, filter: { ...this.state.filter, other: !this.state.filter.other }})}>
            <img className={this.state.filter.other ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.other_t}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
