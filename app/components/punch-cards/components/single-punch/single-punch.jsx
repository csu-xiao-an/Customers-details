import {punchPostService} from 'project-services'
import Delete from '../modal-delete/modal-delete.jsx'
import './single-punch.styl'

export default class SinglePunch extends React.Component {
  state = {
    isVisibleModalConfirmed: false,
    isUse: false
  }
  static propTypes = {
    update: PropTypes.func.isRequired,
    i: PropTypes.object.isRequired
  }
  use = () => {
    punchPostService(this.props.i.id).then(r => r)
  }
  handleConfirmedModal = () => {
    this.setState({isVisibleModalConfirmed: !this.state.isVisibleModalConfirmed}, () => this.props.update())
    if (this.state.isVisibleModalConfirmed) this.setState({isUse: false})
  }
  render () {
    return (
      <div id='single-punch'>
        <Delete handleConfirmedModal={this.handleConfirmedModal} isVisibleModalConfirmed={this.state.isVisibleModalConfirmed}
          id={this.props.i.id} use={this.state.isUse} />
        <div className='triangle-down-wrap'>
          <div className='triangle-down' />
        </div>
        <div className='punch-data'>
          <div className='delete-wrap'>
            <img onClick={this.handleConfirmedModal} src={config.urls.media + 'trash-black.png'} />
          </div>
          <h1 className='p-name'>{this.props.i.procedure_name}</h1>
          <h1 className='p-sum'>{this.props.i.sum}{config.data.currency}</h1>
          <div className={this.props.i.expiration ? 'date-to-wrap' : 'hidden'}>
            <div className='cal-wrap'>
              <img src={config.urls.media + 'calendar.png'} />
            </div>
            <h1 className='date-to'>
              {config.translations.is_valid}<span>{this.props.i.expiration}</span> / {config.translations.left}
              <span> {Math.floor(moment.duration(moment(this.props.i.expiration) - moment()).asDays())}</span> {config.translations.days}
            </h1>
          </div>
          <div className='use-wrap'>
            <div className='button' onClick={this.use}>
              <h1 className='use'>{config.translations.use}</h1>
            </div>
            <div className='info'>
              <h1><span>{this.props.i.uses.length + (this.props.i.uses.length === this.props.i.procedure_count ? 0 : 1)}</span>/{this.props.i.procedure_count}</h1>
            </div>
          </div>
          <div className='punch-data-uses-list'>
            {this.props.i.uses.map((i, k) => <div className='uses'>
              <div className='check-wrap'>
                <img src={config.urls.media + 'check-ok.svg'} onClick={() => this.setState({isUse: i.id}, () => this.handleConfirmedModal())} />
              </div>
              <h1 className='count'>{this.props.i.uses.length - k}</h1>
              <h1 className='date'>{i.date}</h1>
            </div>)}
          </div>
        </div>
      </div>
    )
  }
}
