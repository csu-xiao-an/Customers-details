import { default as ModalPhoneLib } from 'project-components/ModalPhoneLib/modal-phone-lib.jsx'

export default ({
  phoneBlurState,
  setPhoneInput,
  editProfile,
  deletePhone,
  phoneBlur,
  getPhone,
  phone,
}) => {
  return (
    <div className='phone'>
      {!editProfile && <div className={'data-phone'}>
        <div className='wrap'>
          <span className='label'>{config.translations.personal_info.phone_label}:</span>
          <span className={!editProfile ? 'phone-labels' : 'hidden'}>{phone.number}</span>
        </div>
        <div className='phone-img'>
          <div className='img-wrap'>
            <a href={'sms:' + phone.number}>
              <img src={config.urls.media + 'send-sms.svg'} />
            </a>
          </div>
          <div className='img-wrap'><a href={'tel:' + phone.number}><img src={config.urls.media + 'call.svg'} /></a></div>
        </div>
      </div>}
      {editProfile &&
        <div className={'phone-edit' + ((!phone.number && phoneBlurState) ? ' error-phone' : '')}>
          <div className='phone-edit-wrap'>
            <span className={'label' + ((!phone.number && phoneBlurState) ? ' error-span' : '')}>
              {(!phone.number && phoneBlurState) ? config.translations.personal_info_editing.phone_label_error : config.translations.personal_info.phone_label}:
            </span>
            <input
              className='edit-input'
              autoComplete='off'
              name={phone.id}
              id={phone.id}
              type='tel'
              ref={setPhoneInput}
              value={phone.number}
              onChange={getPhone}
              onBlur={phoneBlur}
            />
          </div>
          <div className='del-info'>
            <div className='del-wrap' onClick={() => deletePhone(phone.id)}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
        </div>}
    </div>
  )
}
