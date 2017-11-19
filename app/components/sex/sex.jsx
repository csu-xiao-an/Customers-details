import {clientReplaceService} from 'project-services'
import './sex.styl'

export default class Adress extends React.Component {
  state = {
    label: '',
    class: ''
  }
  init = () => {
    let defaultPos
    if (config.data.gender === 'male') {
      defaultPos = 0
      this.setState({class: 'button-male', label: config.translations.male})
    } else if (config.data.gender === 'female') {
      defaultPos = 207
      this.setState({class: 'button-female', label: config.translations.female})
    } else {
      defaultPos = 103.5
      this.setState({class: '', label: config.translations.other})
    }
    let button = this.refs.button
    let mouseDifference
    let difference = button.getBoundingClientRect().left
    let position
    button.style.left = defaultPos + 'px'
    button.addEventListener('touchstart', e => { mouseDifference = e.targetTouches[0].clientX - button.getBoundingClientRect().left }, false)
    button.addEventListener('touchmove', e => {
      position = e.targetTouches[0].clientX - mouseDifference - difference
      if (position < 0) position = 0
      if (position > 207) position = 207
      button.style.left = position + 'px'
    }, false)
    button.addEventListener('touchend', () => {
      if (position < 207 / 2) {
        clientReplaceService(`${config.urls.gender}='male'`).then(r => {
          if (r.status === 204) {
            config.data.gender = 'male'
            button.style.left = '0px'
            this.setState({class: 'button-male', label: config.translations.male})
          }
        })
      }
      if (position > 207 / 2) {
        clientReplaceService(`${config.urls.gender}='female'`).then(r => {
          if (r.status === 204) {
            config.data.gender = 'female'
            button.style.left = '207px'
            this.setState({class: 'button-female', label: config.translations.female})
          }
        })
      }
    }, false)
  }
  componentDidMount = () => this.init()
  render () {
    return (
      <div id='sex'>
        <div className='sex-wrap'>
          <div className={'button ' + this.state.class} ref='button'>{this.state.label}</div>
          <div className='label'>{config.translations.male}</div>
          <div className='label'>{config.translations.other}</div>
          <div className='label'>{config.translations.female}</div>
        </div>
      </div>
    )
  }
}
