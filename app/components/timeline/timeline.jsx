import Appointments from './components/appointments/appointments.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Depts from './components/depts/depts.jsx'
import Notes from './components/notes/notes.jsx'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import data from './timeline.worker.js'
import './timeline.styl'

class Timeline extends React.Component {
  componentWillMount = () => {
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    this.setState({data: data()})
  }
  render () {
    const fields = {
      appointments: i => <Appointments i={i} {...this.props} />,
      gallery: i => <Gallery i={i} {...this.props} />,
      depts: i => <Depts i={i} {...this.props} />,
      notes: i => <Notes i={i} {...this.props} />,
      sms: i => <Sms i={i} {...this.props} />
    }
    return (
      <div id='timeline'>
        <Topnav {...this.props} />
        <div className='list'>{this.state.data.map(i => <div>
          {i.separator && <div className='separator-wrap'><div className='separator'>
            {config.translations.dates.weekdays[moment(i.date).get('day')] + ' ' + moment(i.date).format('YYYY-MM-DD')}</div></div>}
          {fields[i.field_name](i)}</div>)}
        </div>
        <div className='test' />
        <div className='buttons-wrap'>
          <button>{'appo'}</button>
          <button>{'Gall'}</button>
          <button>{'Debts'}</button>
          <button>{'Other'}</button>
        </div>
      </div>
    )
  }
}
export default AccessRights(Timeline)
