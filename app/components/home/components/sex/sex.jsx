import './sex.styl'

export default class Sex extends React.Component {
  state = {
    label: config.translations.personal_info.gender.select_gender,
    changeState: false,
    maleSelected: false,
    femaleSelected: false,
    genderSelect: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount () {
    ['male', 'female'].map(item => this.props.defaultPos(item))
  }
  render () {
    return (
      <div id='sex'>
        <div className='block' onClick={this.props.editProfile && this.props.handleGenderClick}>
          <div className='gender'>
            <span className='label'>{config.translations.personal_info.gender_label}:</span>
            <span className='block-content'>
              <span className='sex-label'>{this.props.label}</span>
            </span>
          </div>
          {this.props.editProfile && <div className='del-wrap' onClick={this.props.deleteGender} >
            <img src={config.urls.media + 'plus2.svg'} />
          </div>}
        </div>
        <div className={this.props.changeState ? 'block1' : 'block change-state-disable'} >
          <div ref='radioMale' id='radioMale' className={this.props.maleSelected ? 'radio checked' : 'radio'} >
            <div className='radio-label'>{config.translations.personal_info.gender.male} &#9794;</div>
            <div className='circle'/>
          </div>
        </div>
        <div className={this.props.changeState ? 'block1' : 'block change-state-disable'} >
          <div ref='radioFemale' id='radioFemale' className={this.props.femaleSelected ? 'radio checked' : 'radio'}>
            <div className='radio-label'>{config.translations.personal_info.gender.female} &#9792;</div>
            <div className='circle'/>
          </div>
        </div>
      </div>
    )
  }
}
