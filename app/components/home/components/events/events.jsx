import { default as formatDate } from 'project-components/format-date.js'
import './events.styl'

export default class Events extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    recentAppointmentsData: PropTypes.array.isRequired
  }

  getColorLine (i) {
    let nextNum = 0
    let colorStr = ''
    let filteredColor = i.services.filter(i => !!i.color)
    let oneColorHeight = (100 / (filteredColor.length).toFixed(2))
    filteredColor.map(i => {
      colorStr += ', ' + (i.color || '') + ' ' + nextNum + '%, ' + (i.color || '') + ' ' + (
        parseFloat(nextNum) + parseFloat(oneColorHeight)) + '%'
      nextNum = parseFloat(nextNum) + parseFloat(oneColorHeight)
    })
    let leftBorder = {
      borderImage: 'linear-gradient(to bottom' + colorStr + ') 1 100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderTop: 'none',
      borderRight: 'navajowhite'
    }
    let rightBorder = {
      borderImage: 'linear-gradient(to bottom' + colorStr + ') 1 100%',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderTop: 'none',
      borderLeft: 'navajowhite'
    }
    let BorderNone = {
      borderImage: '',
      borderWidth: '',
      borderStyle: '',
      borderRight: ''
    }
    return (colorStr ? (config.isRTL ? rightBorder : leftBorder) : BorderNone)
  }

  getHeaderTitle = i => i.services.map(i => i.name).join(', ')
  componentWillMount = () => {
    if (!Array.isArray(config.data.recent_appointments)) config.data.recent_appointments = []
  }
  
  render () {
    let currDate = moment().format('YYYY-MM-DD HH-mm')
    const recentAppointmentsData = this.props.recentAppointmentsData.sort((a, b) => moment(b.date) - moment(currDate))
    return (
      <div id='events'>
        {/* <a href={this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false}> */}
        {/* <img className='clock' src={config.urls.media + 'clock.png'} /></a> */}
        {/* <h1 className={'label ' + (config.isRTL ? 'left' : 'right')}>{config.translations.close_visits}</h1> */}
        <div className='event-header'>
          <label>{config.translations.appointments.title}</label>
        </div>
        <div className='wrap-events'>
          {recentAppointmentsData.map(i => (
            <div key={i.id} className='events-list'>
              <a href={`${config.urls.calendar_link}${moment(i.start).format('YYYY-MM-DD')}?appointment_id=${i.id}&worker_id=${i.worker_id}&appointment_view=true`}>
                <div className='note' style={i.services && this.getColorLine(i)} >
                  <div className='note-head'>
                    <img className='icon' src={config.urls.media + 'ic_servise.svg'} />
                    {i.services && <span>{this.getHeaderTitle(i)}</span>}
                  </div>
                  <div className='block1' >
                    <div className='dates'>
                      <div className='duration'>
                        <img className='icon' src={config.urls.media + 'ic_time.svg'} />
                        <span>{`${moment(i.start).format('HH:mm')} - ${moment(i.end).format('HH:mm')}`}</span>
                      </div>
                      <div className='date'>
                        <img className='icon' src={config.urls.media + 'ic_day.svg'} />
                        <span>{formatDate(i.start)}</span>
                      </div>
                    </div>
                  </div>
                  <div className='block2' >
                    <span>{i.total_price}{config.data.currency}</span>
                    <span className='min'>/&nbsp;{config.translations.appointments.summary_label}</span>
                  </div>
                </div>
              </a>
            </div>)
          )}
        </div>
        <a href={this.props.rights.events.cr_app
          ? `${config.urls.main}${config.urls.appointment}?client_id=${config.data.id}&worker_id=${config.user.worker_id}`
          : false}>
          <div className='event-footer'>
            <label>{config.translations.appointments.add_new_lable}</label>
            <img className='add' src={config.urls.media + 'c_add_stroke.svg'} />
          </div>
        </a>
      </div>
    )
  }
}
