import {clientReplaceService} from 'project-services'
import './phone.styl'

export default class Phone extends React.Component {
  state = {
    phoneEdit: false,
    phone: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const body = `${config.urls.phone}=${this.state.phone}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.phone = this.state.phone
        this.setState({phoneEdit: !this.state.phoneEdit, phone: ''})
      }
    })
  }
  render () {
    return this.props.rights.isPhone && (
      <div id='phone'>
        <div className={config.data.phone ? this.state.phoneEdit ? 'hidden' : 'data' : 'hidden'}>
          <div className='wrap'>
            <span className='label'>{config.translations.phone}:</span>
            <div className={config.data.phone ? this.state.phoneEdit ? 'hidden' : 'phone-labels' : 'hidden'}>
              { /* <div className='label-wrap'><div className={'call-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.mobile}</div></di v  >*/}
              <div className='phone-wrap' onClick={this.props.rights.phone.edit
                ? () => this.setState({phoneEdit: !this.state.phoneEdit, phone: config.data.phone}) : () => {}}>
                <span>{config.data.phone}</span>
              </div>
            </div>
          </div>
          <div className='phone-img'>
            {this.props.rights.phone.send_sms &&
            <div className='img-wrap'><a href={`/send-sms?client_id=${config.data.id}&referrer=${location.pathname + '?' + location.search}`}>
              <img src={config.urls.media + 'send-sms.svg'} /></a></div>}
            {this.props.rights.phone.call &&
            <div className='img-wrap'><a href={'tel:' + config.data.phone}><img src={config.urls.media + 'call.svg'} /></a></div>}
          </div>
        </div>
        {this.props.rights.phone.add &&
          <div onClick={() => this.setState({phoneEdit: !this.state.phoneEdit})}
            className={config.data.phone || this.state.phoneEdit ? 'hidden' : 'add-phone'}>
            <div className='add-wrap'>
              <span className='label'>{config.translations.phone}:</span>
              <h1>{config.translations.add_phone}</h1>
            </div>
            <img src={config.urls.media + 'add.svg'} />
          </div>}
        <div className={this.state.phoneEdit ? 'phone-edit' : 'hidden'}>
          <div className='edit'>
            <span className='label'>{config.translations.phone}:</span>
            <input className='edit-input' type='tel' value={this.state.phone} onChange={e => this.setState({phone: e.target.value})} />
            {/*<h1 className='edit-label'>{config.translations.mobile}</h1>*/}
          </div>
          <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
      </div>
    )
  }
}
