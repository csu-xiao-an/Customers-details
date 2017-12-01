import Appointments from './components/appointments/appointments.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Depts from './components/depts/depts.jsx'
import Notes from './components/notes/notes.jsx'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import array from './timeline.worker.js'
import './timeline.styl'

class Timeline extends React.Component {
  state = {
    filter: {
      appointment: true,
      gallery: true,
      depts: true,
      other: true
    }
  }
  componentWillMount = () => { if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl' }
  render () {
    const fields = {
      appointments: i => <Appointments i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      depts: i => <Depts i={i} {...this.props} />,
      notes: i => <Notes i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    const data = array(this.state.filter)
    return (
      <div id='timeline'>
        <Topnav {...this.props} />
        <div className='list'>{data.map(i => <div>
          {i.separator && <div className='separator-wrap'><div className='separator'>
            {config.translations.dates.weekdays[moment(i.date).get('day')] + ' ' + moment(i.date).format('YYYY-MM-DD')}</div></div>}
          {fields[i.field_name](i)}</div>)}
        </div>
        <div className='test' />
        <div className='buttons-wrap'>
          <div onClick={() => this.setState({filter: { ...this.state.filter, appointment: !this.state.filter.appointment }})}>
            <img className={this.state.filter.appointment ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.appointment}</h1>
          </div>
          <div onClick={() => this.setState({filter: { ...this.state.filter, gallery: !this.state.filter.gallery }})}>
            <img className={this.state.filter.gallery ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.gallery}</h1>
          </div>
          <div onClick={() => this.setState({filter: { ...this.state.filter, depts: !this.state.filter.depts }})}>
            <img className={this.state.filter.depts ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.debts_t}</h1>
          </div>
          <div onClick={() => this.setState({filter: { ...this.state.filter, other: !this.state.filter.other }})}>
            <img className={this.state.filter.other ? '' : 'nVisible'} src={config.urls.media + 'ok.png'} />
            <h1>{config.translations.other_t}</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
