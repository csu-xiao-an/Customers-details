import React from 'react'
import './notes.styl'

class Notes extends React.Component {
  constructor () {
    super()
    this.state = {
      isReminderEdit: false,
      isEditNotes: true,
      description: ''
    }
  }
  render () {
    return (
      <div id='notes'>
        <div className='label-wrap'>
          <div className={'add-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.notes}</div>
        </div>
        <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
          <div className='description'>
            <input className='description-input' type='text' value={this.state.description}
              onChange={event => { this.setState({description: event.target.value}) }} />
            <h1 className='description-label'>{ config.translations.description_notes}</h1>
          </div>
          <div className='reminder'>
            <div className='button-wrap'>
              <button>{config.translations.save}</button>
            </div>
            <div className={'img-wrap ' + (config.isRtL ? 'left' : 'right')}>
              <img src={config.urls.media + 'bell.svg'} />
            </div>
            <h1 className={config.isRtL ? 'left' : 'right'} onClick={() => { this.setState({isReminderEdit: !this.state.isReminderEdit}) }}>{config.translations.reminder}</h1>
          </div>
        </div>
        <div onClick={() => { this.setState({isEditNotes: !this.state.isEditNotes}) }}
          className={this.state.isEditNotes ? 'hidden' : 'add-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_note}</h1>
        </div>
      </div>
    )
  }
}
export default Notes
