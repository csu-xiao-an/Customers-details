import './email.styl'

export default class Email extends React.Component {
  state = {
    emailEdit: false,
    isValidation: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentDidMount = () => {
    this.setState({ email: config.data.email })
  }
  render () {
    return this.props.rights.isEmail && (
      <div id='email'>
        <div className={!this.props.editProfile ? 'gmailwrap' : 'hidden'}>
          <div className='data-wrap'>
            <span className='label'>{config.translations.personal_info.email_lable}:</span>
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
                <span className='label'>{config.translations.personal_info.email_lable}:</span>
                <span className='add_info'>{config.translations.personal_info.empty_email_label}</span>
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
                <span className='label'>{config.translations.personal_info.email_lable}:</span>
                <input className='edit-input'
                  id='email-input'
                  type='email'
                  value={this.props.hateEmail}
                  onChange={e => this.props.changeMail(e.target.value)} />
              </div>
              <div className='del-info'>
                {/* {!this.state.isValidation && <div className='error'>&#10007;</div>} */}
                <div className='del-wrap' onClick={this.props.deleteEmail}>
                  <img src={config.urls.media + 'plus2.svg'} />
                </div>
              </div>
            </div>
          </div>}
      </div>
    )
  }
}
