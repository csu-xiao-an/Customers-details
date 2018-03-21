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
  countAppointment = () => {
    let c = 0
    config.data.recent_appoinments && config.data.recent_appoinments[0] &&
    config.data.recent_appoinments.forEach(i => i.procedures.forEach(() => c++))
    return c
  }
  render () {
    return (
      <div id='topnav'>
        <div className='header' style={(this.props.punch || this.props.color) && {backgroundColor: 'darkslateblue'}}>
          <div className={'arrow-wrap ' + (config.isRtL ? 'right' : 'left')} onClick={this.props.rights.topnav.back ? () => window.history.go(-1) : () => {}}>
            <img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} style={config.isRtL ? {transform: 'scale(-1, 1)'} : {}} /></div>
          {(this.props.home || this.props.timeline) && <div className='client-name'><div className='icon-online' />
            <h1>{config.data.name}</h1><span>({Math.floor(moment.duration(moment() - moment(config.data.birthdate)).asYears())} years old)</span></div>}
          {this.props.punch && <div className='client-name'>
            <h1>{config.translations.punch_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          {this.props.color && <div className='client-name'>
            <h1>{config.translations.color_card_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          <div className={'edit-wrap ' + (config.isRtL ? 'left' : 'right')}>
            {this.props.home && <img className='edit' src='/dist/media/ic_menu.svg' />}
            {this.props.punch && <img className='add' src={config.urls.media + 'add_bt.svg'}
              onClick={() => this.props.history.push(config.urls.punch_cards_adding)} />}
          </div>
        </div>
      </div>
    )
  }
}
