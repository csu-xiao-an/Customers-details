// import {timelineGetService} from 'project-services'
import Appointments from './components/appointments/appointments.jsx'
import AccessRights from '../access-rights/access-rights.jsx'
import Gallery from './components/gallery/gallery.jsx'
import Depts from './components/depts/depts.jsx'
import Notes from './components/notes/notes.jsx'
import Sms from './components/sms/sms.jsx'
import Topnav from '../topnav/topnav.jsx'
import data from './timeline.worker.js'
import './timeline.styl'

const f = {
  appointments: i => <Appointments i={i} />,
  gallery: i => <Gallery i={i} />,
  depts: i => <Depts i={i} />,
  notes: i => <Notes i={i} />,
  sms: i => <Sms i={i} />
}

class Timeline extends React.Component {
  componentWillMount = () => {
    if (config.data.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    this.setState({data: data()})
  }
  render () {
    return (
      <div id='timeline'>
        <Topnav {...this.props} />
        <div className='list'>{this.state.data.map(i => f[i.field_name](i))}</div>
        <div className='test' />
      </div>
    )
  }
}
export default AccessRights(Timeline)
