import { default as ModalPhoneLib } from 'project-components/ModalPhoneLib/modal-phone-lib.jsx'
import SinglePhone from './components/single-phone'
import './phones.styl'

const phonePopupTranslations = {
  cancel_modal: config.translations.personal_info_editing.skip,
  not_found_title: config.translations.personal_info_editing.not_found_title,
  save: config.translations.personal_info_editing.save,
  enter_phone_number: config.translations.personal_info_editing.enter_phone_number,
  phone_number: config.translations.personal_info_editing.phone_number
}

export default ({
  getPhoneFromPopup,
  addingNewPhone,
  phoneBlurState,
  onAddNewPhone,
  visibleModal,
  deletePhone,
  editProfile,
  cancelSave,
  phoneBlur,
  getPhone,
  cancel,
  rights,
  phones,
  phone
}) => {
  return rights.isPhone && (
    <div id='phones'>
      {phones.map(i => (
        <SinglePhone
          key={i.id}
          addingNewPhone={addingNewPhone}
          phoneBlurState={phoneBlurState}
          phones={phones}
          getPhone={getPhone}
          phoneBlur={phoneBlur}
          phone={i}
          deletePhone={deletePhone}
          editProfile={editProfile}
        />
      ))}
      {editProfile && phones.length !== 5 &&
        <div className='add-phones' onClick={onAddNewPhone}>
          <div className='add-phones-wrap'>
            <div className='phone-wrap'>
              <span className='label'>{config.translations.personal_info_editing.empty_phone_label}</span>
              <span className='add_info'>{config.translations.personal_info_editing.add_phone_number}</span>
            </div>
            <div className='add-info'>
              <div className='add-wrap'>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
          </div>
        </div>
      }
      <ModalPhoneLib
        text={phonePopupTranslations}
        visibleModal={visibleModal}
        closeModal={cancel}
        cancelSave={cancelSave}
        cancel={cancel}
        getPhone={getPhoneFromPopup}
      />
    </div>
  )
}
