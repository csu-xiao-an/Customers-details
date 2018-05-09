import {clientReplaceService} from 'project-services'
import './birthdate.styl'

export default class Birthdate extends React.Component {
  state = {
    inputValue: config.data.birthdate
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  save = () => {
    this.state.inputValue && clientReplaceService(`birthdate=${this.state.inputValue}`).then(r => {
      if (r.status === 204) {
        config.data.birthdate = this.state.inputValue
      }
    })
  }
  render () {
    return (
      <div className='block'>
        <div className='birthday'>
          <span className='label'>{config.translations.birthday}:</span>
          <div className='block-content'>
            <div id='birthdate'>
              <div className='birthdate-edit'>
                <div className='input-wrap'><input type='date' onBlur={this.save} disabled={!this.props.rights.birthdate.edit}
                  value={this.state.inputValue} onChange={e => this.setState({inputValue: e.target.value})} onInput={e => console.log(e.target.value)} /></div>
                <div className='label-wrap'><h1 className='label'>{config.translations.birthdate}</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
