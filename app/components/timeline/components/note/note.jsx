import './note.styl'

export default class Note extends React.Component {
  state = {
    isVisible: false
  }
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='notes-timeline'>
        <div className='order-in'>{moment(this.props.i.date).format('HH:hh')}</div>
        <div className='icon-wrap'>
          <img src={config.urls.media + 'pencil.svg'} />
        </div>
        <h1 onClick={() => this.setState({isVisible: true})} className='text' style={this.state.isVisible ? {} : {height: '25px'}}>{this.props.i.text}</h1>
      </div>
    )
  }
}
