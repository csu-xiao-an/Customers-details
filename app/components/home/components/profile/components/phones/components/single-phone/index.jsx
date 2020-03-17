import { default as ModalPhoneLib } from 'project-components/ModalPhoneLib/modal-phone-lib.jsx'

export default class SinglePhone extends React.Component {

  componentDidMount = () => {
    this.props.addingNewPhone && this.phoneInput.focus()
  }

  clearNumber = id => {
    this.props.deletePhone(id)
    this.phoneInput.focus()
  }

  render () {
    return (
      <div className='phone'>
        {!this.props.editProfile && <div className={'data-phone'}>
          <div className='wrap'>
            <span className='label'>{config.translations.personal_info.phone_label}:</span>
            <span className={!this.props.editProfile ? 'phone-labels' : 'hidden'}>{this.props.phone.number}</span>
          </div>
          <div className='phone-img'>
            <div className='img-wrap'>
              <a href={'sms:' + this.props.phone.number}>
                <img src={config.urls.media + 'send-sms.svg'} />
              </a>
            </div>
            <div className='img-wrap'><a href={'tel:' + this.props.phone.number}><img src={config.urls.media + 'call.svg'} /></a></div>
          </div>
        </div>}
        {this.props.editProfile &&
          <div className={'phone-edit' + ((!this.props.phone.number && this.props.phoneBlurState) ? ' error-phone' : '')}>
            <div className='phone-edit-wrap'>
              <span className={'label' + ((!this.props.phone.number && this.props.phoneBlurState) ? ' error-span' : '')}>
                {(!this.props.phone.number && this.props.phoneBlurState) ? config.translations.personal_info_editing.phone_label_error : config.translations.personal_info.phone_label}:
              </span>
              <input
                className={'edit-input'}
                autoComplete='off'
                name={this.props.phone.id}
                type='tel'
                ref={input => { this.phoneInput = input }}
                value={this.props.phone.number}
                onChange={this.props.getPhone}
                onBlur={this.props.phoneBlur}
              />
            </div>
            <div className='del-info'>
              <div className='del-wrap' onClick={() => this.clearNumber(this.props.phone.id)}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>
          </div>}
      </div>
    )
  }
}
