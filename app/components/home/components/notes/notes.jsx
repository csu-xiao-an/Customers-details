import {notesPostService, notesReplaceService, notesDeleteService} from 'project-services'
import {formatDate, Select, reminder} from 'project-components'
import Line from '../line/line.jsx'
import './notes.styl'

export default class Notes extends React.Component {
  state = {
    selectedValue: config.translations.notes_list[0].value,
    selectedLabel: config.translations.notes_list[0].label,
    isReminderEdit: false,
    newEditNotes: false,
    noteReplace: false,
    isEditNotes: false,
    description: '',
    note_id: 0,
    time: '0',
    key: 0
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const d = moment.utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
    let rem = reminder(this.state.time, this.state.selectedValue)
    let body = `text=${this.state.description}&date=${d}`
    if (rem) body = body + `&reminder_date=${rem}`
    notesPostService(body).then(r => {
      if (r.status === 201) {
        config.data.notes.unshift({
          text: this.state.description,
          date: d
        })
        if (rem) config.data.notes[0].reminder_date = rem
        r.json().then(id => { config.data.notes[0].id = id })
        this.setState({isEditNotes: !this.state.isEditNotes, newEditNotes: !this.state.newEditNotes, isReminderEdit: false, description: '', time: '0'})
      }
    })
  }
  update = () => {
    let rem = reminder(this.state.time, this.state.selectedValue)
    let body = `text=${this.state.description}`
    if (rem) body = `text=${this.state.description}&reminder_date=${rem}`
    notesReplaceService(body, this.state.note_id).then(r => {
      if (r.status === 204) {
        let idNote = config.data.notes.find(note => {
          if(+this.state.key === note.id){
            return note
          }
        })
        idNote.text = this.state.description
        if (rem) {
          idNote.reminder_date = rem
        } else delete idNote.reminder_date
        this.setState({
          noteReplace: !this.state.noteReplace,
          isEditNotes: !this.state.isEditNotes,
          isReminderEdit: false,
          description: '',
          note_id: 0,
          time: '0'
        })
      }
    })
  }

  checkLength (desc) {
    let str = ''
    if (desc.length > 70) {
      str = desc.substr(0, 70) + '...'
    } else {
      str = desc
    }
    return str
  }
  delete = (id, k) => {
    notesDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.notes.splice(k, 1)
        this.forceUpdate()
      }
    })
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

  closeEdit = () => {
    this.setState({
    noteReplace: !this.state.noteReplace,
    isEditNotes: !this.state.isEditNotes,
    newEditNotes: this.state.newEditNotes,
    isReminderEdit: false,
    note_id: 0,
    description: ''
    })
  }
  closeEditNoteFooter = () => {
    this.setState({
    noteReplace: !this.state.noteReplace,
    isEditNotes: !this.state.isEditNotes,
    newEditNotes: !this.state.newEditNotes,
    isReminderEdit: false,
    note_id: 0,
    description: ''
    })
  }

  componentWillMount = () => { if (!Array.isArray(config.data.notes)) config.data.notes = [] }

  renderNoteEdit = () => {
    return (
      <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
        <div className='description'>
          <input className='description-input'
            type='text'
            value={this.state.description}
            onChange={e => this.setState({description: e.target.value})}
            placeholder={config.translations.description_notes}
          />
        </div>
        <div className='reminder'>
          <div className='reminder-text'
            onClick={() => this.setState({isReminderEdit: !this.state.isReminderEdit})}>
            <span>{config.translations.reminder}</span>
            <div className={'img-wrap'}>
              <img src={config.urls.media + 'ic_notifications_active.svg'} />
            </div>
          </div>
          <div className={this.state.isReminderEdit ? 'reminder-time ' : 'hidden'}>
            <div className='select-wrap'>
              <Select value={this.state.selectedLabel}
                options={config.translations.notes_list}
                onChange={e => this.setState({selectedValue: e.value, selectedLabel: e.label})} />
            </div>
            <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
              <div className='ink'
                onClick={() => this.setState({time: +this.state.time + 1})}>
                <span>+</span>
              </div>
              <input className='count-input'
                type='number'
                value={this.state.time}
                onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }}
                onChange={e => this.setState({time: +e.target.value})} />
              <div className='ink' onClick={() => { if (+this.state.time > 0) this.setState({time: +this.state.time - 1}) }}>
                <span className='minus'>-</span>
              </div>
            </div>
          </div>
          <div className='actions-note'>
            <button
              className='save'
              onClick={this.state.noteReplace ? this.update : this.submit}>
              {config.translations.save}
            </button>
            <button
              className='delete'
              onClick={this.closeEdit}>
              <span>{config.translations.del}</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

// ////////////////////// nOTE FOOTER //////////////////////

  renderNoteAdd = () => {
    return (
      <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
        <div className='description'>
          <input className='description-input'
            type='text'
            value={this.state.description}
            onChange={e => this.setState({description: e.target.value})}
            placeholder={config.translations.description_notes}
          />
        </div>
        <div className='reminder'>
          <div className='reminder-text'
            onClick={() => this.setState({isReminderEdit: !this.state.isReminderEdit})}>
            <span>{config.translations.reminder}</span>
            <div className={'img-wrap'}>
              <img src={config.urls.media + 'ic_notifications_active.svg'} />
            </div>
          </div>
          <div className={this.state.isReminderEdit ? 'reminder-time ' : 'hidden'}>
            <div className='select-wrap'>
              <Select value={this.state.selectedLabel}
                options={config.translations.notes_list}
                onChange={e => this.setState({selectedValue: e.value, selectedLabel: e.label})} />
            </div>
            <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
              <div className='ink'
                onClick={() => this.setState({time: +this.state.time + 1})}>
                <span>+</span>
              </div>
              <input className='count-input'
                type='number'
                value={this.state.time}
                onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }}
                onChange={e => this.setState({time: +e.target.value})} />
              <div className='ink' onClick={() => { if (+this.state.time > 0) this.setState({time: +this.state.time - 1}) }}>
                <span className='minus'>-</span>
              </div>
            </div>
          </div>
          <div className='actions-note'>
            <button
              className='save'
              onClick={this.state.noteReplace && this.submit}>
              {config.translations.save}
            </button>
            <button
              className='delete'
              onClick={this.closeEditNoteFooter}>
              <span>{config.translations.del}</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div id='notes'>
        <div className='note-header'>
          <label>{config.translations.notes}</label>
        </div>
        <div className='note-body'>
          {config.data.notes.map(i => (
            this.state.note_id === i.id
            ? this.renderNoteEdit()
            : <div key={i.id} className='note-list '>
              <div className='left-side'>
                <div className='date'>
                  <span className='notes-list-date'>{formatDate(i.date)}</span>
                  <div className={i.reminder_date ? 'notes-list-reminder' : 'hidden'}>
                    <img src={config.urls.media + 'ic_notifications_active.svg'} />
                  </div>
                </div>
                <span className={'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false')}>
                  {config.translations.remember + ': ' + this.checkLength(i.text)}
                </span>
              </div>
              <div className='right-side'>
                <img src={config.urls.media + 'ic_edit_stroke.svg'}
                  onClick={this.props.rights.notes.edit ? () => this.replace(i, i.id) : () => {}}
                   />
              </div>
            </div>
          ))}
        </div>
        {this.state.newEditNotes && this.state.isEditNotes && this.renderNoteAdd()}
        {this.props.rights.notes.add &&
          <div className='note-footer'>
          <label>{config.translations.add_note}</label>
          <img src={config.urls.media + 'c_add_stroke.svg'} onClick={() => this.setState({isEditNotes: !this.state.isEditNotes, newEditNotes: !this.state.newEditNotes, noteReplace: !this.state.noteReplace})} />
        </div>}
      </div>
    )
  }
}
