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
      return config.translations.punch_create.replace('{name}', this.props.i.procedure_name).replace('{count}', this.props.i.procedure_count)
    } else if (this.props.i.uses.length === this.props.i.procedure_count) {
      return config.translations.punch_end.replace('{name}', this.props.i.procedure_name)
    } else {
      return config.translations.punch_use.replace('{name}', this.props.i.procedure_name)
        .replace('{countCur}', this.props.i.uses.length).replace('{count}', this.props.i.procedure_count)
    }
  }
  render () {
    return (
      <div id='punch-card'>
        <div className='order-in'>{moment(this.props.i.added_date).format('HH:hh')}</div>
        <div className='icon-wrap'>
          <img src={config.urls.media + 'calendar.png'} />
        </div>
        <h1 onClick={() => this.setState({isVisible: true})} className='text' style={this.state.isVisible ? {} : {height: '25px'}}>
          {this.get()}
        </h1>
      </div>
    )
  }
}
