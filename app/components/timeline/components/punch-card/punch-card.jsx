import './punch-card.styl'

export default class PunchCard extends React.Component {
  state = {
    isVisible: false
  }
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  get = () => {
    if (this.props.i.event_type === 'punch_card_created') {
      return `${this.props.i.service_name}. ${config.translations.punch_create}`
    } else if (this.props.i.event_type === 'punch_card_used' && this.props.i.use_id !== this.props.i.service_count) {
      return `${this.props.i.service_name}. ${config.translations.punch_use} ${this.props.i.use_id} / ${this.props.i.service_count}`
    } else if (this.props.i.event_type === 'punch_card_used' && this.props.i.use_id === this.props.i.service_count) {
      return `${this.props.i.service_name}. ${config.translations.punch_use_full}`
    }
  }
  render () {
    return (
      <div id='punch-card'>
        <div className='icon-wrap'><img src={`${config.urls.media}ic-discount.svg`} /></div>
        <div className='order-in'>{moment(this.props.i.date).format('HH:mm')}</div>
        <p className={`text ${this.state.isVisible ? '' : 'ellipsis'}`} onClick={() => this.setState({isVisible: !this.state.isVisible})}>{this.get()}</p>
      </div>
    )
  }
}
