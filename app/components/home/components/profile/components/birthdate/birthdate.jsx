import { default as Datepicker } from 'project-components/Datepicker/datepicker.jsx'
import './birthdate.styl'
export default ({changeBirth, profileBirthEdit, birthyear, birthdate, editProfile, errorClass, handleChangeYear, handleChangeMonth, handleChangeDay, deleteBirthday,  year, month, day}) => {
  const renderBirthDay = () => {
    const months = config.translations.dates.months
    const monthVerbal = months[moment(month).get('month')]
    const replaceableDay = isNaN(day) ? '01' : day

    if (birthyear && !birthdate) {
      return birthyear
    } else if (birthyear && birthdate) {
      return config.translations.personal_info.birthdate_format.replace('{month}', monthVerbal).replace('{day}', replaceableDay).replace('{year}', birthyear)
    } else if (!birthyear && birthdate) {
      return `${monthVerbal} ${replaceableDay}`
    }
  }

  return (
    <div id='birthdate' className={errorClass ? ' errorBorder' : ''}>
      {!editProfile && <div className='wrapBDay'>
        <span className='label'>{config.translations.personal_info.birthday_label}</span>
        <span className='ymd'>
          {renderBirthDay()}
        </span>
      </div>}
      {
        (editProfile && !profileBirthEdit && (!config.data.birthdate && !config.data.birthyear))
          ? <div onClick={changeBirth}
            className='add-birth'>
            <div className='wrap-birth'>
              <span className='label'>{config.translations.personal_info.birthday_label}</span>
              <span className='add-label'>{config.translations.personal_info_editing.add_birth_label}</span>
            </div>
            <div className='add-info'>
              <div className='add-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div> : ''}
      {editProfile && (profileBirthEdit || config.data.birthdate || config.data.birthyear) &&
        <div className='edit-wrap'>
          <div className='datepicker'>
            <span className={'label ' + (errorClass ? 'error-span' : '')}>{errorClass ? config.translations.personal_info_editing.birthday_label_error : config.translations.personal_info.birthday_label}</span>
            <Datepicker
              handleChangeYear={handleChangeYear}
              handleChangeMonth={handleChangeMonth}
              handleChangeDay={handleChangeDay}
              year={year}
              month={month}
              day={day}
            />
          </div>
          <div className='del-info'>
            <div className='del-wrap' onClick={deleteBirthday}>
              <img src={config.urls.media + 'plus2.svg'} />
            </div>
          </div>
        </div>}
    </div>
  )
}
