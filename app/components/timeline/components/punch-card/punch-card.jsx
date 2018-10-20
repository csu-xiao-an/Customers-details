import './punch-card.styl'

export default class PunchCard extends React.Component {
  state = {
    isVisible: false
  }
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  get = () => {
    if (this.props.i.uses.length === 0) {
      return config.translations.punch_create.replace('{name}', this.props.i.service_name)
        .replace('{count}', this.props.i.service_count)
    } else if (this.props.i.uses.length === this.props.i.service_count) {
      return config.translations.punch_end.replace('{name}', this.props.i.service_name)
    } else {
      return config.translations.punch_use.replace('{name}', this.props.i.service_name)
        .replace('{countCur}', this.props.i.uses.length).replace('{count}', this.props.i.service_count)
    }
  }
  render () {
    return (
      <div id='punch-card'>
        <div className='icon-wrap'><img src={`${config.urls.media}ic-discount.svg`} /></div>
        <div className='order-in'>{moment(this.props.i.date).format('HH:hh')}</div>
        <p className={`text ${this.state.isVisible ? '' : 'ellipsis'}`} onClick={() => this.setState({isVisible: !this.state.isVisible})}>{this.get()}</p>
      </div>
    )
  }
}
