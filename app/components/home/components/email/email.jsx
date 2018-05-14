import {clientReplaceService} from 'project-services'
import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    email: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const body = `${config.urls.email}=${this.state.email}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.email = this.state.email
        this.setState({emailEdit: !this.state.emailEdit, email: ''})
      }
    })
  }
  render () {
    return this.props.rights.isEmail && (
      <div id='email'>
        <div className={!this.state.emailEdit ? 'gmailwrap' : 'hidden'}>
          <div className='data-wrap'>
            <span className='label'>{config.translations.email}:</span>
            <div className='gmailcom'>
              <span onClick={this.props.rights.email.send_email
                ? () => this.setState({emailEdit: !this.state.emailEdit, email: config.data.email})
                : () => {}}>{config.data.email}
              </span>
            </div>
          </div>
          {this.props.rights.email.send_email && <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>}
        </div>
        {this.props.rights.email.add &&
        <div onClick={() => this.setState({emailEdit: !this.state.emailEdit})}
          className={config.data.email || this.state.emailEdit ? 'hidden' : 'add-email'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_email}</h1>
        </div>}
        <div className={this.state.emailEdit ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <span className='label'>{config.translations.email}</span>
            <input className='edit-input' type='email' value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
          </div>
          <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
      </div>
    )
  }
}
