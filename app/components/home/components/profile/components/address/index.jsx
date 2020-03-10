import './address.styl'

export default ({setAddressInput, editProfile, profileAddressEdit, changeAddressEdit, changeAdress, address, delAddress }) => {
  return (
    <div id='address'>
      {!editProfile && <div className='address-wrap'>
        <div className='address-data'>
          <span className='label'>{config.translations.personal_info.address_lable}:</span>
          <span className='text'>{config.data.address}</span>
        </div>
        <div className='images'>
          <div className='img-wrap'>
            <a href={config.urls.waze.replace('{address}', encodeURIComponent(config.data.address))}>
              <img src={config.urls.media + 'waze.png'} />
            </a>
          </div>
          <div className='img-wrap'>
            <a href={config.urls.google_maps + encodeURIComponent(config.data.address)}>
              <img src={config.urls.media + 'icon-address.png'} />
            </a>
          </div>
        </div>
      </div>}
      {editProfile && !config.data.address && !profileAddressEdit &&
        <div onClick={changeAddressEdit} className='add-address'>
          <div className='wrap-address'>
            <span className='label'>{config.translations.personal_info.address_lable}:</span>
            <span className='add_info'>{config.translations.personal_info_editing.empty_address_label}</span>
          </div>
          <div className='add-info'>
            <div className='add-wrap'>
              <img src={config.urls.media + 'profile_plus.svg'} />
            </div>
          </div>
        </div>}
      {(editProfile && (profileAddressEdit || config.data.address)) &&
        <div className='address-data-edit'>
          <div className='address-wrap-edit'>
            <span className='label'>{config.translations.personal_info.address_lable}:</span>
            <input
              id='pac-input'
              className='controls'
              type='text'
              name='address'
              ref={setAddressInput}
              onChange={changeAdress}
              value={address}
              placeholder={config.translations.personal_info_editing.address_placeholder}
            />
          </div>
          <div className='del-info'>
            <div className='del-wrap' onClick={delAddress}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
        </div>}
    </div>
  )
}
