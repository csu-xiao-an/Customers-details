import {notesPostService, notesReplaceService, notesDeleteService} from 'project-services'
import {formatDate, Select, reminder} from 'project-components'
import Line from '../line/line.jsx'
import './notes.styl'

export default class Notes extends React.Component {
  state = {
    selectedValue: config.translations.notes_list[0].value,
    selectedLabel: config.translations.notes_list[0].label,
    isReminderEdit: false,
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
        this.setState({isEditNotes: !this.state.isEditNotes, isReminderEdit: false, description: '', time: '0'})
      }
    })
  }
  update = () => {
    let rem = reminder(this.state.time, this.state.selectedValue)
    let body = `text=${this.state.description}`
    if (rem) body = `text=${this.state.description}&reminder_date=${rem}`
    notesReplaceService(body, this.state.note_id).then(r => {
      if (r.status === 204) {
        config.data.notes[this.state.key].text = this.state.description
        if (rem) {
          config.data.notes[this.state.key].reminder_date = rem
        } else delete config.data.notes[this.state.key].reminder_date
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
  componentWillMount = () => { if (!Array.isArray(config.data.notes)) config.data.notes = [] }
  render () {
    return (
      <div id='notes'>
        <div className={config.data.notes && config.data.notes.length > 0 ? 'label-wrap' : 'hidden'}>
          <div className={'add-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.notes}</div></div>
        {config.data.notes.map((i, k) => (
          <div key={k} className={this.state.noteReplace ? 'hidden' : 'notes-list ' + (i.reminder_date ? 'pd5' : 'pd17')}>
            <div className='notes-list-delete-wrap'>
              {this.props.rights.notes.delete &&
                <img className='notes-list-delete' src={config.urls.media + 'add.svg'} onClick={() => this.delete(i.id, k)} />}
            </div>
            <div className='notes-list-data-wrap' onClick={this.props.rights.notes.edit ? () => this.replace(i, k) : () => {}}>
              <div className={i.reminder_date ? 'notes-list-reminder' : 'hidden'}><img src={config.urls.media + 'bell.svg'} /></div>
              <h1 className={'notes-list-desc ' + (i.reminder_date ? 'rem_true' : 'rem_false')}>{i.text}</h1>
              <p className='notes-list-date'>{formatDate(i.date)}</p>
            </div>
          </div>
        ))}
        <div className={this.state.isEditNotes ? 'edit-note' : 'hidden'}>
          <div className='description'>
            <input className='description-input' type='text' value={this.state.description} onChange={e => this.setState({description: e.target.value})} />
            <h1 className='description-label'>{ config.translations.description_notes}</h1>
          </div>
          <div className={'reminder ' + (this.state.isReminderEdit ? 'h150' : 'h55')}>
            <div className={'button-wrap ' + (config.isRtL ? 'left' : 'right')}>
              <button onClick={this.state.noteReplace ? this.update : this.submit}>{config.translations.save}</button></div>
            <div className={'reminder-text ' + (config.isRtL ? 'left' : 'right')}
              onClick={() => this.setState({isReminderEdit: !this.state.isReminderEdit})}>
              <div className={'img-wrap ' + (config.isRtL ? 'left' : 'right')}><img src={config.urls.media + 'bell.svg'} /></div>
              <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.reminder}</h1>
            </div>
            <div className={this.state.isReminderEdit ? 'reminder-time ' + (config.isRtL ? 'left' : 'right') : 'hidden'}>
              <div className='select-wrap'>
                <Select value={this.state.selectedLabel} options={config.translations.notes_list}
                  onChange={e => this.setState({selectedValue: e.value, selectedLabel: e.label})} />
              </div>
              <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <div className='ink' onClick={() => this.setState({time: +this.state.time + 1})}><span>+</span></div>
                <input className='count-input' type='number' value={this.state.time}
                  onFocus={e => { if (toString(e.target.value) === '0') e.target.value = '' }}
                  onBlur={e => { if (toString(e.target.value) === '') e.target.value = '0' }}
                  onChange={e => this.setState({time: +e.target.value})} />
                <div className='ink' onClick={() => { if (+this.state.time > 0) this.setState({time: +this.state.time - 1}) }}>
                  <span className='minus'>-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.rights.notes.add &&
          <div onClick={() => this.setState({isEditNotes: !this.state.isEditNotes})} className={this.state.isEditNotes ? 'hidden' : 'add-wrap'}>
            <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
            <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_note}</h1>
          </div>}
        <Line />
      </div>
    )
  }
}
