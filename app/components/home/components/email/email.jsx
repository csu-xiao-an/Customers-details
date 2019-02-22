import {clientReplaceService} from 'project-services'
import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    email: this.props.hateEmail,
    error: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentDidMount = () => {
    this.setState({email: config.data.email})
  }
  delInfo = () => {
    this.setState({email: ''}, () => this.props.getEmail(this.state.email))
  }
  render () {
    return this.props.rights.isEmail && (
      <div id='email'>
        <div className={!this.props.editProfile ? 'gmailwrap' : 'hidden'}>
          <div className='data-wrap'>
            <span className='label'>{config.translations.email}:</span>
            <div className='gmailcom'>
              <span>{config.data.email}
              </span>
            </div>
          </div>
          {/* {this.props.rights.email.send_email && <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>} */}
          {this.props.rights.email.send_email && <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>}
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
        <div className={this.props.editProfile ? 'email-edit' : 'hidden'}>
          <div className='edit'>
            <div className='edit-wrap'>
              <span className='label'>{config.translations.email}:</span>
              <input className='edit-input'
                type='email'
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value, error: ''}, () => this.props.getEmail(this.state.email))} />
              {this.state.error && <div className='error'>{this.state.error}</div>}
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={this.delInfo}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>
          {/* <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div> */}
        </div>
      </div>
    )
  }
}
