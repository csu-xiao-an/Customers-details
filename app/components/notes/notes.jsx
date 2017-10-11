import {notesPostService, notesReplaceService, notesDeleteService} from 'project-services'
import {formatDate} from 'project-components'
import React, {Component} from 'react'
import Select from 'react-select'
import moment from 'moment'
import './notes.styl'

class Notes extends Component {
  constructor () {
    super()
    this.state = {
      selectedValue: config.translations.notes_list[0].value,
      isReminderEdit: false,
      noteReplace: false,
      isEditNotes: false,
      description: '',
      note_id: 0,
      time: '0',
      key: 0
    }
  }
  submit = async () => {
    config.data.notes ? '' : config.data.notes = []
    let reminder = this.reminder()
    let body = `text=${this.state.description}`
    if (reminder) body = `text=${this.state.description}&reminder_date=${reminder}`
    const response = await notesPostService(body)
    if (response.status === 201) {
      config.data.notes.unshift({
        id: await response.json().then(id => id),
        text: this.state.description,
        date: moment().format('YYYY-MM-DD HH:mm')
      })
      if (reminder) config.data.notes[0].reminder_date = reminder
      this.setState({isEditNotes: !this.state.isEditNotes, isReminderEdit: false, description: '', time: '0'})
    }
  }
  update = async () => {
    let reminder = this.reminder()
    let body = `text=${this.state.description}`
    if (reminder) body = `text=${this.state.description}&reminder_date=${reminder}`
    const response = await notesReplaceService(body, this.state.note_id)
    if (response.status === 204) {
      config.data.notes[this.state.key].text = this.state.description
      config.data.notes[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
      if (reminder) {
        config.data.notes[this.state.key].reminder_date = reminder
      } else { delete config.data.notes[this.state.key].reminder_date }
      this.setState({
        noteReplace: !this.state.noteReplace,
        isEditNotes: !this.state.isEditNotes,
        isReminderEdit: false,
        description: '',
        note_id: 0,
        time: '0'
      })
    }
  }
  delete = async (id, k) => {
    const response = await notesDeleteService(id)
    if (response.status === 204) {
      config.data.notes.splice(k, 1)
      this.forceUpdate()
    }
  }
  replace = (i, key) => {
    this.setState({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      isReminderEdit: i.reminder_date,
      description: i.text,
      note_id: i.id,
      key
    })
  }
  reminder = () =>
    this.state.time !== '0' && this.state.time !== 0 ? moment().add(this.state.time, this.state.selectedValue).format('YYYY-MM-DD HH:mm') : undefined
  render () {
    return (
      <div id='notes'>
        <div className={config.data.notes && config.data.notes.length > 0 ? 'label-wrap' : 'hidden'}><div className={'add-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.notes}</div></div>
        {config.data.notes.map((i, k) => (
          <div key={k} className={this.state.noteReplace ? 'hidden' : 'notes-list ' + (i.reminder_date ? 'pd5' : 'pd17')}>
            <div className='notes-list-delete-wrap'>
              <img className='notes-list-delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(i.id, k) }} />
            </div>
            <div className='notes-list-data-wrap' onClick={() => { this.replace(i, k) }}>
              <div className={i.reminder_date ? 'notes-list-reminder' : 'hidden'}><img src={config.urls.media + 'bell.svg'} /></div>
              <h1 className={'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false')}>{i.text}</h1>
              <p className='notes-list-date'>{formatDate(i.date)}</p>
            </div>
          </div>
        ))}
        <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
          <div className='description'>
            <input className='description-input' type='text' value={this.state.description} onChange={e => { this.setState({description: e.target.value}) }} />
            <h1 className='description-label'>{ config.translations.description_notes}</h1>
          </div>
          <div className={'reminder ' + (this.state.isReminderEdit ? 'h150' : 'h55')}>
            <div className={'button-wrap ' + (config.isRtL ? 'left' : 'right')}><button onClick={this.state.noteReplace ? this.update : this.submit}>{config.translations.save}</button></div>
            <div className={'reminder-text ' + (config.isRtL ? 'left' : 'right')} onClick={() => { this.setState({isReminderEdit: !this.state.isReminderEdit}) }}>
              <div className={'img-wrap ' + (config.isRtL ? 'left' : 'right')}><img src={config.urls.media + 'bell.svg'} /></div>
              <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.reminder}</h1>
            </div>
            <div className={this.state.isReminderEdit ? 'reminder-time ' + (config.isRtL ? 'left' : 'right') : 'hidden'}>
              <Select className={config.isRtL ? 'left' : 'right'} placeholder={config.translations.select_placeholder} value={this.state.selectedValue}
                options={config.translations.notes_list} onChange={e => { this.setState({selectedValue: e.value}) }} />
              <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <div className='ink' onClick={() => this.setState({time: parseInt(this.state.time) + 1})}><span>+</span></div>
                <input className='count-input' type='number' value={this.state.time}
                  onFocus={e => { toString(e.target.value); if (e.target.value === '0') e.target.value = '' }}
                  onBlur={e => { toString(e.target.value); if (e.target.value === '') e.target.value = '0' }}
                  onChange={e => { this.setState({time: +e.target.value}) }} />
                <div className='ink' onClick={() => { if (parseInt(this.state.time) > 0) this.setState({time: parseInt(this.state.time) - 1}) }}>
                  <span className='minus'>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => { this.setState({isEditNotes: !this.state.isEditNotes}) }}
          className={this.state.isEditNotes ? 'hidden' : 'add-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_note}</h1>
        </div>
      </div>
    )
  }
}
export default Notes
