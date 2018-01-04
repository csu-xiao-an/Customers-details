import './sms.styl'

export default class Sms extends React.Component {
  state = {
    isVisible: false
  }
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='sms-timeline'>
        <div className='order-in'>{moment(this.props.i.date).format('HH:hh')}</div>
        <div className='icon-wrap'><img src={config.urls.media + 'sms.png'} /></div>
        <h1 className='text' style={this.state.isVisible ? {} : {height: '25px'}}
          onClick={() => this.setState({isVisible: true})}>{this.props.i.text}</h1>
      </div>
    )
  }
}
