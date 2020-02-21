import './name.styl'

export default class Name extends React.Component {
  state = {
    checkEmpty: false,
    editName: false,
    clear: false
  }

  nameInput = React.createRef()

  handleAddName = () => this.setState({ editName: true })
  handleCheckEmpty = () => this.setState({ checkEmpty: !this.props.name })

  componentDidUpdate = () => {
    !this.props.name && this.nameInput.current && this.nameInput.current.focus()
  }

  render () {
    const { name, editProfile, onChangeName, onClearName } = this.props
    return (
      <div id='name' className={'full-wrap-name ' + ((!name && this.state.checkEmpty) ? 'error-name' : '')} onClick={this.handleAddName}>
        <div className='fullname-wrap'>
          <span className='label'>{config.translations.personal_info.name_label}:</span>
          {(this.state.editName || name) && editProfile
            ? <input
              className='edit-input'
              id='name-input'
              type='text'
              ref={this.nameInput}
              onBlur={this.handleCheckEmpty}
              value={name}
              onChange={onChangeName}
            />
            : <span className={'block-content' + (editProfile && !name ? ' add-name' : '')}>{name || config.translations.personal_info_editing.empty_name_label}</span>}
        </div>
        {editProfile && <>
          {!this.state.editName && !config.data.name
            ? <div className='add-info btn-common'>
              <div className='add-wrap '>
                <img src={config.urls.media + 'profile_plus.svg'} />
              </div>
            </div>
            : <div className='del-info btn-common'>
              <div className='del-wrap' onClick={onClearName}>
                <img src={config.urls.media + 'plus2.svg'} />
              </div>
            </div>}
        </>}
      </div>
    )
  }
}
