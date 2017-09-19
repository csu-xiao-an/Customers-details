import { notesPostService, notesReplaceService, notesDeleteService } from 'project-services'
import { formatDate } from 'project-components'
import React, { Component } from 'react'
import Select from 'react-select'
import moment from 'moment'
import './notes.styl'

class Notes extends Component {
  constructor () {
    super()
    this.state = {
      isReminderEdit: false,
      noteReplace: false,
      isEditNotes: false,
      description: '',
      note_id: 0,
      time: '0',
      key: 0
    }
    this.submit = this.submit.bind(this)
    this.update = this.update.bind(this)
  }
  async submit () {
    let body = `text=${this.state.description}`
    let reminder = this.reminder()
    let reminderDate = null
    if (reminder) {
      body = `text=${this.state.description}&reminder_date=${reminder}`
      reminderDate = reminder
    }
    const response = await notesPostService(body)
    if (response.status === 201) {
      let id = await response.json().then(id => {
        return id
      })
      config.data.notes.unshift({
        id: id,
        text: this.state.description,
        date: moment().format('YYYY-MM-DD HH:mm')
      })
      if (reminderDate) {
        config.data.notes[0].reminder_date = reminderDate
      }
      this.setState({isEditNotes: !this.state.isEditNotes, isReminderEdit: false, description: '', time: '0'})
    }
  }
  async update () {
    let body = `text=${this.state.description}`
    if (this.state.isReminderEdit) {
      body = `text=${this.state.description}`
    }
    let reminder = this.reminder()
    let reminderDate = null
    if (reminder) {
      body = `text=${this.state.description}&reminder_date=${reminder}`
      reminderDate = reminder
    }
    const response = await notesReplaceService(body, this.state.note_id)
    if (response.status === 204) {
      config.data.notes[this.state.key].text = this.state.description
      config.data.notes[this.state.key].date = moment().format('YYYY-MM-DD HH:mm')
      if (reminderDate) {
        config.data.notes[this.state.key].reminder_date = reminderDate
      }
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
  async delete (id, key) {
    const response = await notesDeleteService(id)
    if (response.status === 204) {
      config.data.notes.splice(key, 1)
      this.forceUpdate()
    }
  }
  replace (el, key) {
    this.setState({
      noteReplace: !this.state.noteReplace,
      isEditNotes: !this.state.isEditNotes,
      isReminderEdit: el.reminder,
      description: el.text,
      note_id: el.id,
      key: key
    })
  }
  reminder () {
    if (this.state.time !== '0') {
      return moment().add(this.state.time, this.state.selectedValue).format('YYYY-MM-DD HH:mm')
    } else {
      return undefined
    }
  }
  componentWillMount () {
    const list = config.translations.notes_list
    let options = [
      {value: 'hours', label: list.hours},
      {value: 'days', label: list.days},
      {value: 'weeks', label: list.weeks},
      {value: 'months', label: list.months}
    ]
    this.setState({options: options, selectedValue: options[0].value})
  }
  render () {
    return (
      <div id='notes'>
        <div className='label-wrap'>
          <div className={'add-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.notes}</div>
        </div>
        {config.data.notes && config.data.notes.map((el, key) => (
          <div key={key} className={this.state.noteReplace ? 'hidden' : 'notes-list ' + (el.reminder_date ? 'pd5' : 'pd17')}>
            <div className='notes-list-delete-wrap'>
              <img className='notes-list-delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(el.id, key) }} />
            </div>
            <div className='notes-list-data-wrap' onClick={() => { this.replace(el, key) }}>
              <div className={el.reminder_date ? 'notes-list-reminder' : 'hidden'}><img src={config.urls.media + 'bell.svg'} /></div>
              <h1 className={'notes-list-desc ' + (el.reminder_date ? 'rem_true' : 'rem_false')}>{el.text}</h1>
              <p className='notes-list-date'>{formatDate(el.date)}</p>
            </div>
          </div>
        ))}
        <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
          <div className='description'>
            <input className='description-input' type='text' value={this.state.description}
              onChange={event => { this.setState({description: event.target.value}) }} />
            <h1 className='description-label'>{ config.translations.description_notes}</h1>
          </div>
          <div className={'reminder ' + (this.state.isReminderEdit ? 'h150' : 'h55')}>
            <div className={'button-wrap ' + (config.isRtL ? 'left' : 'right')}><button onClick={this.state.noteReplace ? this.update : this.submit}>{config.translations.save}</button></div>
            <div className={'reminder-text ' + (config.isRtL ? 'left' : 'right')} onClick={() => { this.setState({isReminderEdit: !this.state.isReminderEdit}) }}>
              <div className={'img-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <img src={config.urls.media + 'bell.svg'} />
              </div>
              <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.reminder}</h1>
            </div>
            <div className={this.state.isReminderEdit ? 'reminder-time ' + (config.isRtL ? 'left' : 'right') : 'hidden'}>
              <Select className={config.isRtL ? 'left' : 'right'} placeholder={config.translations.select_placeholder}
                onChange={e => { this.setState({selectedValue: e.value}) }}
                value={this.state.selectedValue} options={this.state.options} />
              <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <div className='ink' onClick={() => this.setState({time: parseInt(this.state.time) + 1})}>
                  <span>+</span>
                </div>
                <input className='count-input' type='number' value={this.state.time}
                  onFocus={event => { toString(event.target.value); if (event.target.value === '0') { event.target.value = '' } }}
                  onBlur={event => { toString(event.target.value); if (event.target.value === '') { event.target.value = '0' } }}
                  onChange={event => { this.setState({time: +event.target.value}) }} />
                <div className='ink' onClick={() => { if (parseInt(this.state.time) > 0) { this.setState({time: parseInt(this.state.time) - 1}) } }}>
                  <span className='minus'>-</span>
                </div>
              </div>
            </div>
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
