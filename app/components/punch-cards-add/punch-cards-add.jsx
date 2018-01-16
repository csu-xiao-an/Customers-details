import AccessRights from '../access-rights/access-rights.jsx'
import {ProceduresList, Switch} from 'project-components'
import {punchGetService} from 'project-services'
import './punch-cards-add.styl'
class PunchCardsAdd extends React.Component {
  state = {
    isCategoryList: false,
    isOpenServices: false,
    isService: true,
    switch: false,
    data: [],
    uses: 0,
    discount: 0,
    total: 0
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => punchGetService().then(r => r.status === 200 &&
    r.json().then(data => {
      let isCategoryList = false
      if (data.length < config.max_services_shown_without_cat + 1 || !data.some(i => data[0].category.id !== i.category.id)) {
        isCategoryList = true
      }
      this.setState({data, isOpenServices: isCategoryList, isCategoryList: !isCategoryList})
    }))
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
            <div className='arrow-wrap' onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
              ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
              : () => window.history.go(-1) : () => this.setState({isService: true}) : () => {}}>
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
          <div className='uses'>
            <h1 className='number_of_uses'>{config.translations.number_of_uses}</h1>
            <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
              <div className='ink' onClick={() => this.setState({uses: +this.state.uses + 1})}><span>+</span></div>
              <input className='count-input' type='number' value={this.state.uses} disabled />
              <div className='ink' style={{backgroundColor: 'orangered'}} onClick={() => { if (+this.state.uses > 0) this.setState({uses: +this.state.uses - 1}) }}>
                <span className='minus'>-</span>
              </div>
            </div>
          </div>
          <div className='price'>
            <div className='discount_wrap'>
              <h1 className='discount'>{config.translations.discount}</h1>
              <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <div className='ink' onClick={() => this.setState({discount: +this.state.discount + 1})}><span>+</span></div>
                <input className='count-input' type='text' value={this.state.discount + '%'} disabled />
                <div className='ink' style={{backgroundColor: 'orangered'}} onClick={() => { if (+this.state.discount > 0) this.setState({discount: +this.state.discount - 1}) }}>
                  <span className='minus'>-</span>
                </div>
              </div>
            </div>
            <div className='total_wrap'>
              <h1 className='total'>{config.translations.total}</h1>
              <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
                <div className='ink' onClick={() => this.setState({total: +this.state.total + 10})}><span>+</span></div>
                <input className='count-input' type='text' value={this.state.total + config.data.currency} disabled />
                <div className='ink' style={{backgroundColor: 'orangered'}} onClick={() => { if (+this.state.total > 0) this.setState({total: +this.state.total - 10}) }}>
                  <span className='minus'>-</span>
                </div>
              </div>
              <h1 className='total_num'>{this.state.i.price * this.state.uses}</h1>
            </div>
          </div>
          <div className='expiration_wrap'>
            <Switch on={this.state.switch} onClick={this.handleValidity} className={config.isRtL ? 'switchleft' : 'switchright'} />
            <h1 className='subscription_period'>{config.translations.subscription_period}</h1>
          </div>
        </div>}
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
