import {notesPostService, notesReplaceService, notesDeleteService} from 'project-services'
import {formatDate, Select, reminder, Switch} from 'project-components'
import AddNote from './components/add-note/add-note.jsx'
import Line from '../line/line.jsx'
import './notes.styl'

export default class Notes extends React.Component {
  state = {
    selectedValue: config.translations.notes_list[0].value,
    selectedValueLable: config.translations.notes_list[0].label,
    selectedLabel: config.data.reminders_default_date_period,
    isReminderEdit: false,
    newEditNotes: this.props.activateNone,
    isReminderDate: null,
    noteReplace: this.props.activateNone,
    isEditNotes: this.props.activateNone,
    description: '',
    switch: false,
    note_id: 0,
    timeStart: config.data.reminders_default_period_amount,
    time: '0',
    key: 0
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    activateNone: PropTypes.bool.isRequired
  }
  backButton = () => {
    this.setState({
      isEditNotes: !this.state.isEditNotes,
      newEditNotes: !this.state.newEditNotes,
      noteReplace: !this.state.noteReplace
    })
  }
  handleIncrementTime = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }))
  }
  handleDecrementTime = () => {
    if (+this.state.time > 0) {
      this.setState(prevState => ({
        time: +prevState.time - 1
      }))
    }
  }
  submit = () => {
    const d = moment().format('YYYY-MM-DD HH:mm:ss')
    let rem = reminder(this.state.time, this.state.selectedValue)
    let body = `text=${this.state.description}&added=${d}`
    if (rem) body = body + `&reminder_date=${rem}`
    notesPostService(body, this.state.note_id).then(r => {
      if (r.status === 201) {
        config.data.notes.unshift({
          text: this.state.description,
          date: d
        })
        if (rem) config.data.notes[0].reminder_date = rem
        r.json().then(id => { config.data.notes[0].id = id })
        this.setState({
          isEditNotes: !this.state.isEditNotes,
          newEditNotes: !this.state.newEditNotes,
          noteReplace: !this.state.noteReplace,
          isReminderEdit: false,
          description: '',
          time: '0'
        })
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
          if (+this.state.key === note.id) {
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
          // isReminderDate: idNote.date,
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
      // isReminderEdit: i.reminder_date,
      // isReminderEdit: true,
      description: i.text,
      isReminderDate: i.reminder_date,
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
            autoFocus
          />
        </div>
        <div className='reminder'>
          <div className='reminder-text'
            onClick={() => this.setState({isReminderEdit: !this.state.isReminderEdit, time: this.state.timeStart})}>
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
            <div className={'input-wrap ' + (config.isRTL ? 'left' : 'right')}>
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

  setSelectValues = (value, label) => this.setState({selectedValue: value, selectedValueLable: label})
  setDescription = value => this.setState({description: value})
  cancelSearch = () => this.setState({description: ''})
  activateSwitch = () => this.setState({switch: !this.state.switch, isReminderEdit: !this.state.isReminderEdit, time: this.state.timeStart})
  render () {
    return (
      <div id='notes'>
        <div className='note-header'>
          <span>{config.translations.notes}</span>
          {this.state.newEditNotes && this.state.noteReplace && this.state.isEditNotes &&
            <button className='back' onClick={this.backButton}><img src={config.urls.media + 'arrow-left.svg'} />{config.translations.back}</button>
          }
        </div>
        <div className='note-body' style={{'max-height': (config.notes_height_limit * 56)}}>
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
                  <p className={'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false')}>
                    {this.checkLength(i.text)}
                  </p>
                </div>
                <div className='right-side'>
                  {/* <img src={config.urls.media + 'ic_edit_stroke.svg'}
                    onClick={this.props.rights.notes.edit ? () => this.replace(i, i.id) : () => {}}
                  /> */}
                </div>
              </div>
          ))}
        </div>
        {/* {this.state.newEditNotes && this.state.isEditNotes && <AddNote
          setDescription={this.setDescription}
          description={this.state.description}
          handleIncrementTime={this.handleIncrementTime}
          handleDecrementTime={this.handleDecrementTime}
          cancelSearch={this.cancelSearch}
          selectedValue={this.state.selectedValue}
          selectedValueLable={this.state.selectedValueLable}
          switch={this.state.switch}
          time={this.state.time}
          setSelectValues={this.setSelectValues}
          isReminderEdit={this.state.isReminderEdit}
          activateSwitch={this.activateSwitch}
          noteReplace={this.state.noteReplace}
          submit={this.submit}
        />} */}
        {/* {this.props.rights.notes.add &&
          <div className='note-footer' onClick={() => this.setState({isEditNotes: !this.state.isEditNotes, newEditNotes: !this.state.newEditNotes, noteReplace: !this.state.noteReplace})}>
            <label>{config.translations.add_note}</label>
            <img src={config.urls.media + 'c_add_stroke.svg'} />
          </div>} */}
      </div>
    )
  }
}
