import './topnav.styl'

export default class Topnav extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    history: PropTypes.object,
    timeline: PropTypes.bool,
    punchAdd: PropTypes.bool,
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
        <div className='header' style={(this.props.punch || this.props.color || this.props.punchAdd) && {backgroundColor: 'darkslateblue'}}>
          <div className='arrow-wrap' onClick={this.props.rights.topnav.back ? () => window.history.go(-1) : () => {}}>
            <img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} /></div>
          {(this.props.home || this.props.timeline) && <div className='client-name'><div className='icon-online' />
            <h1>{config.data.name}</h1><h1>({Math.floor(moment.duration(moment() - moment(config.data.birthdate)).asYears())})</h1></div>}
          {this.props.punch && <div className='client-name'>
            <h1>{config.translations.punch_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          {this.props.color && <div className='client-name'>
            <h1>{config.translations.color_card_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          {this.props.punchAdd && <div className='client-name'>
            <h1>{config.translations.new_punch}</h1></div>}
          <div className='edit-wrap'>
            {this.props.home && <button className='edit'>{config.translations.edit}</button>}
            {this.props.punch && <img className='add' src={config.urls.media + 'add_bt.svg'}
              onClick={() => this.props.history.push(config.urls.punch_cards_adding)} />}
          </div>
        </div>
      </div>
    )
  }
}
