import { default as ModalPhoneLib } from 'project-components/ModalPhoneLib/modal-phone-lib.jsx'
import './phone.styl'

export default class Phone extends React.Component {
  state = {
    phoneEdit: false,
    phone: this.props.phone,
    error: ''
  }

  static propTypes = {
    rights: PropTypes.object.isRequired
  }

  delInfo = () => {
    const phone = this.props.phone
    phone.number = ''
    this.setState({ phone }, () => this.props.deletePhone(phone))
    this.phoneInput.focus()
  }

  saveNumber = phone => {
    this.setState({ phone })
  }

  phoneNumber = e => {
    const phone = this.props.phone
    phone.number = e.target.value
    this.props.resetPhoneBlur()
    this.setState({ phone, error: '' }, () => this.props.getPhone(this.state.phone))
  }

  componentDidMount = () => {
    this.props.add && this.phoneInput.focus()
  }

  // phoneBlur = () => {
  //   if (!this.props.phone.number) this.props.blurPhoneModal
  //   if (this.props.phone.number) {
  //     this.setState({ blurPhone: false })
  //   } else {
  //     this.setState({ blurPhone: true })
  //   }
  // }

  render () {
    return this.props.rights.isPhone && (
      <div id='phone'>
        <div className={'phone-main ' + ((!this.props.phone.number && this.props.phoneBlurState) ? 'error-name' : '')}>
          <div className={!this.props.editProfile ? 'data-phone' : 'hidden'}>
            <div className='wrap'>
              <span className='label'>{config.translations.personal_info.phone_label}:</span>
              <span className={!this.props.editProfile ? 'phone-labels' : 'hidden'}>{this.props.phone.number}</span>
            </div>
            <div className='phone-img'>
              {this.props.rights.phone.send_sms &&
                <div className='img-wrap'><a href={'sms:' + this.props.phone.number}>
                  <img src={config.urls.media + 'send-sms.svg'} />
                </a>
                </div>}
              {this.props.rights.phone.call &&
                <div className='img-wrap'><a href={'tel:' + this.props.phone.number}><img src={config.urls.media + 'call.svg'} /></a></div>}
            </div>
          </div>
          {
            (this.props.editProfile && !this.props.phones && !this.state.phone.number)
              ? <div
                onClick={() => this.props.changePhoneEdit()}
                className={!this.props.profilePhoneEdit ? 'add-phone' : 'hidden'}>
                <div className='add-wrap'>
                  <span className='label'>{config.translations.personal_info.phone_label}:</span>
                  <h1>{config.translations.personal_info_editing.empty_phone_label}</h1>
                </div>
                <div className='add-info'>
                  <div className='add-wrap'>
                    <img src={config.urls.media + 'profile_plus.svg'} />
                  </div>
                </div>
              </div> : ''
          }
          {
            this.props.editProfile &&
              <div className={this.props.profilePhoneEdit || this.props.phones || this.state.phone ? 'phone-edit' : 'hidden'}>
                <div className='edit'>
                  <div className='edit-wrap'>
                    <span className={'label ' + ((!this.props.phone.number && this.props.phoneBlurState) ? 'error-span' : '')}>{!this.props.phoneBlurState ? config.translations.personal_info.phone_label : config.translations.personal_info_editing.phone_label_error}:</span>
                    <input
                      className={'edit-input'}
                      autoComplete='off'
                      // autoFocus
                      // id='phone-input'
                      type='tel'
                      ref={input => { this.phoneInput = input }}
                      value={this.props.phone.number}
                      onChange={e => this.phoneNumber(e)}
                      onBlur={this.props.phoneBlur}
                    />
                  </div>
                  <div className='del-info'>
                    <div className='del-wrap' onClick={this.delInfo}>
                      <img src={config.urls.media + 'plus2.svg'} />
                    </div>
                  </div>
                  {this.state.error && <div className='error'>{this.state.error}</div>}
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
}
