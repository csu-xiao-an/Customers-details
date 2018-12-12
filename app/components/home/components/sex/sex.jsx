import {clientReplaceService} from 'project-services'
import './sex.styl'

export default class Sex extends React.Component {
  state = {
    label: config.translations.selectGender,
    changeState: false,
    maleSelected: false,
    femaleSelected: false,
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  defaultPos = () => {
    if (config.data.gender) {
      let initState = config.data.gender
      if (initState.toLowerCase() === 'male') {
        this.setState({label: config.translations.male, maleSelected: true})
      } else if (initState.toLowerCase() === 'female') {
        this.setState({label: config.translations.female, femaleSelected: true})
      } else if (!initState) {
        this.setState({label: config.translations.selectGender, femaleSelected: false, maleSelected: false})
      }
    }
    // let initState = config.data.gender
  }
  deleteGender = () => {
    clientReplaceService(`${config.urls.gender}=null`).then(r => {
      if (r.status === 204) {
        config.data.gender = 'Select gender'
        this.setState({label: config.translations.selectGender, femaleSelected: false, maleSelected: false})
      }
    })
  }
  handleGenderClick = () => {
    let changeState = !this.state.changeState
    this.setState({changeState})
  }
  selectedSex = () => {
    this.refs.radioMale.addEventListener('click', e => {
      clientReplaceService(`${config.urls.gender}=male`).then(r => {
        if (r.status === 204) {
          config.data.gender = 'male'
          this.setState({label: config.translations.male, maleSelected: true, femaleSelected: false, changeState: false})
          this.props.delSex
        }
      })
    })
    this.refs.radioFemale.addEventListener('click', e => {
      clientReplaceService(`${config.urls.gender}=female`).then(r => {
        if (r.status === 204) {
          config.data.gender = 'female'
          this.setState({label: config.translations.female, maleSelected: false, femaleSelected: true, changeState: false})
          this.props.delSex
        }
      })
    })
  }

  componentWillMount () {
    ['male', 'female'].map(item => this.defaultPos(item))
  }
  componentDidMount = () => {
    const divNode = document.createElement('div')
    this.selectedSex()
    const url = `${config.urls.media}ic-marked.svg`
    divNode.innerHTML = `<style>
    .circle:before{
      content: url(${url});
    }
    </style>`
    document.body.appendChild(divNode)
    divNode.innerHTML = `<style>
    .radio.checked .circle:before{
      content: url(${url});
    }
    </style>`
    document.body.appendChild(divNode)
  }
  render () {
    return (
      <div id='sex'>
        <div className='block'>
          <div className='gender' onClick={this.props.editProfile && this.handleGenderClick}>
            <span className='label'>{config.translations.gender}:</span>
            <span className='block-content'>
              <span className='sex-label'>{this.state.label}</span>
            </span>
          </div>
          {/* <div className='delete-gender' onClick={this.deleteGender} > */}
          {this.props.editProfile && <div className='del-wrap' onClick={this.deleteGender} >
            <img src={config.urls.media + 'plus2.svg'} />
          </div>}
          {/* </div> */}
        </div>
        <div className={this.state.changeState ? 'block1' : 'block change-state-disable'} >
          <div ref='radioMale' className={this.state.maleSelected ? 'radio checked' : 'radio'} >
            <div className='radio-label'>{config.translations.male} &#9794;</div>
            <div className='circle'/>
          </div>
        </div>
        <div className={this.state.changeState ? 'block1' : 'block change-state-disable'} >
          <div ref='radioFemale' className={this.state.femaleSelected ? 'radio checked' : 'radio'}>
            <div className='radio-label'>{config.translations.female} &#9792;</div>
            <div className='circle'/>
          </div>
        </div>
      </div>
    )
  }
}
