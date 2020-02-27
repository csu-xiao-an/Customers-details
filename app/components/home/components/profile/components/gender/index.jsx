import './gender.styl'
const genderArray = ['male', 'female']
export default ({ editProfile, onSelectGender, onOpenCloseGender, onClearGender, openGenderStrip, gender }) => {
  return (
    <div id='gender'>
      <div className='block' onClick={editProfile && onOpenCloseGender}>
        <div className='gender'>
          <span className='label'>{config.translations.personal_info.gender_label}:</span>
          <span className='block-content'>
            <span className='sex-label'>{config.translations.personal_info.gender[gender] || config.translations.personal_info.gender.select_gender}</span>
          </span>
        </div>
        {editProfile && <div className='del-wrap' onClick={onClearGender}>
          <img src={config.urls.media + 'plus2.svg'} />
        </div>}
      </div>
      {(openGenderStrip) && <ul>
        {genderArray.map(item => (
          <li onClick={() => onSelectGender(item)} key={item} className={'gender_item' + (item === gender ? ' gender_active' : '')}>
            {config.translations.personal_info.gender[item]}
            <img className='marked_img' src={config.urls.media + 'ic-marked.svg'} />
          </li>
        )
        )}
      </ul>}
    </div>
  )
}
