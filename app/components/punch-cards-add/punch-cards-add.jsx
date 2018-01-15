import AccessRights from '../access-rights/access-rights.jsx'
import {ProceduresList, Switch} from 'project-components'
import {punchGetService} from 'project-services'
import './punch-cards-add.styl'

class PunchCardsAdd extends React.Component {
  state = {
    isOpenServices: false,
    isService: true,
    data: [],
    switch: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => punchGetService().then(r => r.status === 200 && r.json().then(data => this.setState({data})))
  getServiceId = i => {
    this.setState({i: i, isService: false})
    console.log(i)
  }
  toogleOpenServices = () => this.setState({isOpenServices: !this.state.isOpenServices})
  handleValidity = () => {
    this.setState({switch: !this.state.switch})
  }
  render () {
    return (
      <div id='punch_cards_adding'>
        <div className='topnav_punch'>
          <div className='header'>
            <div className='arrow-wrap' onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isOpenServices
              ? () => this.toogleOpenServices() : () => window.history.go(-1) : () => this.setState({isService: true}) : () => {}}>
              <img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} /></div><span className='before' />
            {this.state.isService && <div className='client-name'><h1>{config.translations.new_punch}</h1></div>}
            {!this.state.isService && <div className='client-name'>
              <h1>{config.translations.punch_service.replace('{service_name}', this.state.i.name)}</h1></div>}
            <div className='edit-wrap' />
          </div>
        </div>
        <div style={this.state.isService ? {display: 'block'} : {display: 'none'}}>
          {this.state.data.length > 0 && <ProceduresList data={this.state.data} getServiceId={this.getServiceId}
            isOpenServices={this.state.isOpenServices} toogleOpenServices={this.toogleOpenServices} />}
        </div>
        {!this.state.isService && <div className='service_edit'>
          <Switch on={this.state.switch} onClick={this.handleValidity} className={config.isRtL ? 'switchleft' : 'switchright'} />
        </div>}
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
