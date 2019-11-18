import { default as Menu } from 'project-components/Menu/Menu.jsx'
import './topnav.styl'

export default class Topnav extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    history: PropTypes.object,
    timeline: PropTypes.bool,
    punch: PropTypes.bool,
    color: PropTypes.bool,
    home: PropTypes.bool
  }

  state = {
    isActive: false
  }

  countAppointment = () => {
    let c = 0
    config.data.recent_appoinments && config.data.recent_appoinments[0] &&
    config.data.recent_appoinments.forEach(i => i.procedures.forEach(() => c++))
    return c
  }

  getHowYaersOld = () => {
    const currentDate = config.data.birthdate
    const currentYear = config.data.birthyear
    const fullDate = new Date(currentYear + '-' + currentDate)
    let diffDate = Math.floor(moment.duration(moment().diff(moment(fullDate))).asYears())
    return (currentDate && currentYear)
      ? (diffDate === 0 ? '0' : diffDate)
      : ''
  }

  menuOnOff = () => {
    this.setState(state => ({
      isActive: !state.isActive
    }), () => {
      const arr = document.querySelectorAll('.list-item')
      const menuModal = document.querySelector('#menu_modal')
      const lastItem = arr[arr.length - 1]
      const coords = lastItem.getBoundingClientRect()
      const bottomCoord = coords.bottom - coords.height / 3
      console.log('coords', coords)
      console.log('bottomCoord', Math.floor(bottomCoord))
      console.log('clientHeight', menuModal.clientHeight)
      if (Math.floor(bottomCoord) >= menuModal.clientHeight) {
        lastItem.style.marginBottom = '4rem'
      }
    })
    document.querySelector('body').classList.toggle('no-scroll')
  }

  closeMenu = () => {
    this.setState({isActive: false})
    document.querySelector('body').classList.remove('no-scroll')
  }

  render () {
    const birthdate = this.getHowYaersOld()
    return (
      <div id='topnav'>
        <div className='header' >
          <div className={'edit-wrap ' + (config.isRTL ? 'rtl' : 'ltr')} style={!config.isRTL ? {transform: 'scale(-1, 1)'} : {}}>
            {this.props.home && <img className='edit' onClick={this.menuOnOff} src={config.urls.media + 'ic_menu.svg'} />}
          </div>
          {(this.props.home || this.props.timeline) && <div className='client-name'>
            <h1>{config.data.name}</h1>
            {birthdate && <span>{config.translations.birthdate_info.years_old.replace('{count}', birthdate)}</span>}
          </div>}
          <div className={'arrow-wrap ' + (config.isRTL ? 'ltr' : 'rtl')} onClick={this.props.rights.topnav.back ? () => window.history.go(-1) : () => {}}>
            <img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} style={!config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
        </div>
        {this.state.isActive && <Menu closeMenu={this.closeMenu} />}
      </div>
    )
  }
}
