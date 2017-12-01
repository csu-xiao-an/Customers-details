import './notes.styl'

export default class Notes extends React.Component {
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
        <h1 className='text'>{this.props.i.text}</h1>
      </div>
    )
  }
}
