import './email.styl'

export default ({editProfile, emailEditing, emailEditingMode, changeMail, email, deleteEmail}) => {
  const edit = editProfile && config.data.email
  const create = editProfile && !config.data.email && !emailEditing
  return (
    <div id='email' onClick={editProfile && emailEditingMode}>
      <div className='gmailwrap'>
        <div className='data-wrap'>
          <span className='label'>{config.translations.personal_info.email_lable}:</span>
          {!editProfile && <span className='email_text'>{email}</span>}
          {create && <span className='add_info'>{config.translations.personal_info_editing.empty_email_label}</span>}
          {(edit || emailEditing) && <input
            className='edit-input'
            id='email-input'
            type='email'
            value={email}
            onChange={changeMail}
          />}
        </div>
        {!editProfile && <a className='linkto' href={'mailto:' + config.data.email}><img src={config.urls.media + 'ic_email.svg'} /></a>}
        {editProfile && <>{config.data.email || emailEditing
          ? <div className='del-info'>
            <div className='del-wrap' onClick={deleteEmail}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
          : <div className='add-info'>
            <div className='add-wrap'>
              <img src={config.urls.media + 'profile_plus.svg'} />
            </div>
          </div>}
        </>
        }
      </div>
    </div>
  )
}
