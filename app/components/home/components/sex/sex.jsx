import {clientReplaceService} from 'project-services'
import './sex.styl'

export default class Sex extends React.Component {
  state = {
    label: '',
    changeState: false,
    maleSelected: false,
    femaleSelected: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  defaultPos = () => {
    let initState = config.data.gender
    if (initState.toLowerCase() === 'male') {
      this.setState({label: 'Male', maleSelected: true})
    } else if (initState.toLowerCase() === 'female') {
      this.setState({label: 'Female', femaleSelected: true})
    }
  }
  handleGenderClick = e => {
    let currentState = this.state.changeState
    this.setState({changeState: !currentState})
  }
  selectedSex = () => {
    this.refs.radioMale.addEventListener('touchend', e => {
      clientReplaceService(`${config.urls.gender}=male`).then(r => {
        if (r.status === 204) {
          config.data.gender = 'male'
          this.setState({label: config.translations.male, maleSelected: true, femaleSelected: false})
        }
      })
    })
    this.refs.radioFemale.addEventListener('touchend', e => {
      clientReplaceService(`${config.urls.gender}=female`).then(r => {
        if (r.status === 204) {
          config.data.gender = 'female'
          this.setState({label: config.translations.female, maleSelected: false, femaleSelected: true})
        }
      })
    })
  }

  componentWillMount = () => {
    ['male', 'female'].map(item => this.defaultPos(item))
  }
  componentDidMount = () => {
    this.selectedSex()
  }
  render () {
    return (
      <div id='sex'>
        <div className='block'>
          <div className='gender' onClick={this.handleGenderClick}>
            <span className='label'>{config.translations.gender}:</span>
            <span className='block-content'>
              <span className='sex-label'>{this.state.label}</span>
            </span>
          </div>
        </div>
        <div className={!this.state.changeState ? 'block change-state-disable' : 'block'} >
          <div ref='radioMale' className={this.state.maleSelected ? 'radio checked' : 'radio'}>
            <div className='radio-label'>{config.translations.male}</div>
            <div className='circle' />
          </div>
        </div>
        <div className={!this.state.changeState ? 'block change-state-disable' : 'block'} >
          <div ref='radioFemale' className={this.state.femaleSelected ? 'radio checked' : 'radio'}>
            <div className='radio-label'>{config.translations.female}</div>
            <div className='circle' />
          </div>
        </div>
      </div>
    )
  }
}
