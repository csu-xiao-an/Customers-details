import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    email: this.props.hateEmail,
    isValidation: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentDidMount = () => {
    this.setState({ email: config.data.email })
    this.validate(config.data.email) && this.setState({ isValidation: true })
  }
  delInfo = () => {
    this.setState({ email: '' }, () => this.props.deleteEmail())
    document.getElementById('email-input').focus()
  }
  changeMail = e => {
    this.setState({ email: e }, () => this.props.getEmail(this.state.email))
    if (e !== '' && e.length >= 3) {
      this.validate(e) ? this.setState({ isValidation: true }) : this.setState({ isValidation: false })
    } else {
      this.setState({ isValidation: false })
    }
  }
  validate = email => {
    const r = /^.+@.+\..+$/
    return r.test(email)
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
          (this.props.editProfile && !config.data.email)
            ? <div onClick={() => this.props.changeEmailEdit()}
              className={!this.props.profileEmailEdit ? 'add-email' : 'hidden'}>
              <div className='wrap-mail'>
                <span className='label'>{config.translations.email}:</span>
                <h1>{config.translations.add_email}</h1>
              </div>
              <div className='add-info'>
                <div className='add-wrap'>
                  <img src={config.urls.media + 'profile_plus.svg'} />
                </div>
              </div>
            </div> : ''
        }
        {this.props.editProfile &&
          <div className={this.props.profileEmailEdit || config.data.email ? 'email-edit' : 'hidden'}>
            <div className='edit'>
              <div className='edit-wrap'>
                <span className='label'>{config.translations.email}:</span>
                <input className='edit-input'
                  id='email-input'
                  type='email'
                  value={this.state.email}
                  onChange={e => this.changeMail(e.target.value)} />
              </div>
              <div className='del-info'>
                {!this.state.isValidation && <div className='error'>&#10007;</div>}
                <div className='del-wrap' onClick={this.delInfo}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
            </div>
            {/* <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div> */}
          </div>}
      </div>
    )
  }
}
