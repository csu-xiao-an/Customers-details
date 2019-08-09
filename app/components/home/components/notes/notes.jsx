import { postService as notesPostService, replaceService as notesReplaceService, replaceReminderService, deleteService as notesDeleteService, deleteReminderService as delNotesWithRem } from 'project-services/notes.service.js'
import { default as NotesLib } from 'project-components/NotesLib/noteslib.jsx'
import './notes.styl'
export default class Notes extends React.Component {
  state = {
    newEditNotes: this.props.activateNone,
    noteReplace: this.props.activateNone,
    isEditNotes: this.props.activateNone,
    loader: false,
    loaderDel: false,
    flag: true
  }
  static propTypes = {
    createNewNote: PropTypes.func.isRequired,
    activateNone: PropTypes.bool.isRequired,
    hiddenNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    notesData: PropTypes.array.isRequired,
    editeNote: PropTypes.func.isRequired
  }
  cancelActions = () => this.setState({newEditNotes: false, noteReplace: false, isEditNotes: false, editNoteId: ''})
  allowActions = () => this.setState({newEditNotes: true, noteReplace: true, isEditNotes: true})
  editAction = id => this.setState({noteReplace: true, isEditNotes: true, editNoteId: id})

  saveNote = (reminder, desc, id) => {
    this.setState({loader: true})
    const added = moment().format('YYYY-MM-DD HH:mm:ss')
    let body = `text=${desc}&added=${added}`
    if (reminder) body = body + `&reminder_date=${reminder}`
    notesPostService(body, id).then(r => {
      if (r.status === 201) {
        this.props.createNewNote(reminder, r, added, desc)
        this.setState({
          isEditNotes: false,
          newEditNotes: false,
          noteReplace: false,
          editNoteId: '',
          loader: false
        })
      }
    })
  }
  clearState = () => {
    this.setState({
      noteReplace: false,
      isEditNotes: false,
      isReminderEdit: false,
      loader: false,
      editNoteId: ''
    })
  }
  editNote = (reminder, id, desc) => {
    this.setState({loader: true})
    let body = `text=${desc}`
    if (reminder) body = `text=${desc}&reminder_date=${reminder}`
    notesReplaceService(body, id).then(r => {
      if (r.status === 204) {
        this.props.editeNote(reminder, id, desc)
        this.clearState()
      }
    })
  }
  deleteNote = id => {
    this.setState({loaderDel: true})
    notesDeleteService(id).then(r => {
      this.props.deleteNote(id)
      if (r.status === 204) {
        this.setState({
          loaderDel: false,
          noteReplace: false,
          isEditNotes: false,
          isReminderEdit: false,
          editNoteId: ''
        })
      }
    })
  }
  componentWillMount = () => { if (!Array.isArray(config.data.notes)) config.data.notes = [] }
  render () {
    return (
      <NotesLib
        customers
        notesData={this.props.notesData}
        loaderDel={this.state.loaderDel}
        hiddenNotes={this.props.hiddenNotes}
        cancelActions={this.cancelActions}
        allowActions={this.allowActions}
        saveNote={this.saveNote}
        loader={this.state.loader}
        editAction={this.editAction}
        editNoteId={this.state.editNoteId}
        editNote={this.editNote}
        deleteNote={this.deleteNote}
        newEditNotes={this.state.newEditNotes}
        noteReplace={this.state.noteReplace}
        isEditNotes={this.state.isEditNotes}
        activateNone={this.props.activateNone}
        flag={this.state.flag}
      />
    )
  }
}
