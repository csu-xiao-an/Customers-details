import {clientReplaceService} from 'project-services'
import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    email: '',
    error: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const { email } = this.state
    const isEmail = ~email.search(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    if (isEmail) {
      const body = `${config.urls.email}=${email}`
      clientReplaceService(body).then(r => {
        if (r.status === 204) {
          config.data.email = this.state.email
          this.setState({emailEdit: !this.state.emailEdit, email: ''})
        }
      })
    } else {
      this.setState({error: 'E-mail is incorrect!'})
    }
  }
  render () {
    return this.props.rights.isEmail && (
      <div id='email'>
        <div className={config.data.email ? this.state.emailEdit ? 'hidden' : 'gmailwrap' : 'hidden'}>
          <div className='data-wrap'>
            <span className='label'>{config.translations.email}:</span>
            <div className='gmailcom'>
              <span onClick={this.props.rights.email.send_email
                ? () => this.setState({emailEdit: !this.state.emailEdit, email: config.data.email})
                : () => {}}>{config.data.email}
              </span>
            </div>
          </div>
          {/* {this.props.rights.email.send_email && <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>} */}
          {this.props.rights.email.send_email && <a className='linkto' href={'mailto:'}><img src={config.urls.media + 'ic_email.svg'} /></a>}
        </div>
        {
          this.props.rights.email.add &&
          <div onClick={() => this.setState({emailEdit: !this.state.emailEdit})}
            className={config.data.email || this.state.emailEdit ? 'hidden' : 'add-email'}>
            <div className='wrap-mail'>
              <span className='label'>{config.translations.email}:</span>
              <h1>{config.translations.add_email}</h1>
            </div>
            <img src={config.urls.media + 'add.svg'} />
          </div>
        }
        <div className={this.state.emailEdit ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <span className='label'>{config.translations.email}:</span>
            <input className='edit-input' type='email' value={this.state.email} onChange={e => this.setState({email: e.target.value, error: ''})} />
            {this.state.error && <div className='error'>{this.state.error}</div>}
          </div>
          <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
      </div>
    )
  }
}
