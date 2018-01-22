import {punchGetService, punchPostService} from 'project-services'
import AccessRights from '../access-rights/access-rights.jsx'
import {ProceduresList, Switch} from 'project-components'
import './punch-cards-add.styl'

const Control = ({c, l, m, p, v}) => {
  Control.propTypes = {
    l: PropTypes.string.isRequired,
    c: PropTypes.string.isRequired,
    v: PropTypes.string.isRequired,
    p: PropTypes.func.isRequired,
    m: PropTypes.func.isRequired
  }
  return (
    <div className={c}>
      <h1 className='label'>{l}</h1>
      <div className={'input-wrap ' + (config.isRtL ? 'left' : 'right')}>
        <div className='ink' onClick={p}><span>+</span></div><input className='count-input' type='text' value={v} disabled />
        <div className='ink' style={{backgroundColor: 'orangered'}} onClick={m}><span className='minus'>-</span></div>
      </div>
    </div>
  )
}

class PunchCardsAdd extends React.Component {
  state = {
    date: moment().year() + '-12-31',
    isCategoryList: false,
    isOpenServices: false,
    isService: true,
    switch: false,
    discount: 0,
    total: 0,
    uses: 10,
    data: [],
    i: {}
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => {
    if (config.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    punchGetService().then(r => r.status === 200 &&
    r.json().then(data => {
      let isCat = data.length < config.max_services_shown_without_cat + 1 || !data.some(i => data[0].category.id !== i.category.id)
      this.setState({data, isOpenServices: isCat, isCategoryList: !isCat})
    }))
  }
  save = () => {
    let b = `service_id=${this.state.i.id}&uses=${this.state.uses}&sum=${this.state.total}&date=${moment.utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')}`
    if (this.state.switch) b = b + `&expiration=${this.state.date}`
    punchPostService(b).then(r => r.status === 201 && r.json().then(id => {
      config.punch_cards.push({
        id,
        service_name: this.state.i.name,
        service_id: this.state.i.id,
        service_count: this.state.uses,
        sum: this.state.total,
        date: moment.utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'),
        uses: []
      })
      if (this.state.switch) config.punch_cards[config.punch_cards.length - 1].expiration = this.state.date
      this.props.history.push(config.urls.punch_cards)
    }))
  }
  getTotal = () => this.setState({total: this.state.i.price * this.state.uses - ((this.state.i.price * this.state.uses * this.state.discount) / 100)})
  toogleOpenServices = () => this.setState({isOpenServices: !this.state.isOpenServices})
  getService = i => this.setState({i: i, isService: false}, () => this.getTotal())
  handleValidity = () => this.setState({switch: !this.state.switch})
  render () {
    return (
      <div id='punch_cards_adding'>
        <div className='topnav_punch'>
          <div className='header'>
            <div className='arrow-wrap' style={config.isRtL ? {float: 'right'} : {float: 'left'}} onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
              ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
              : () => window.history.go(-1) : () => this.setState({isService: true}) : () => {}}>
              <img style={config.isRtL ? {transform: 'scale(-1, 1)'} : {}} className='arrow-back' src={config.urls.media + 'arrow-back.svg'} /></div>
            <span className='before' />
            {this.state.isService && <div className='client-name'><h1>{config.translations.new_punch}</h1></div>}
            {!this.state.isService && <div className='client-name'>
              <h1>{config.translations.punch_service.replace('{service_name}', this.state.i.name)}</h1></div>}
            <div className='edit-wrap' style={config.isRtL ? {float: 'left'} : {float: 'right'}} />
          </div>
        </div>
        <div style={this.state.isService ? {display: 'block'} : {display: 'none'}}>
          {this.state.data.length > 0 && <ProceduresList data={this.state.data} getService={this.getService}
            isOpenServices={this.state.isOpenServices} toogleOpenServices={this.toogleOpenServices} />}
        </div>
        {!this.state.isService && <div className='service_edit'>
          <Control m={() => { if (+this.state.uses > 0) this.setState({uses: +this.state.uses - 1}, () => this.getTotal()) }}
            p={() => this.setState({uses: +this.state.uses + 1}, () => this.getTotal())}
            l={config.translations.number_of_uses} v={this.state.uses} c={'uses_wrap'} />
          <div className='price'>
            <Control m={() => { if (+this.state.discount > 0) this.setState({discount: +this.state.discount - 1}, () => this.getTotal()) }}
              p={() => this.setState({discount: +this.state.discount + 1}, () => this.getTotal())}
              l={config.translations.discount} v={this.state.discount + '%'} c={'discount_wrap'} />
            <Control m={() => { if (+this.state.total > 0) this.setState({total: Math.round(this.state.total) - 10}) }}
              l={config.translations.total} v={this.state.total + config.data.currency} c={'total_wrap'}
              p={() => this.setState({total: Math.round(this.state.total) + 10})} />
            <h1 className='total_num'>{config.translations.price_single + ' ' + (this.state.i.price -
              ((this.state.i.price * this.state.discount) / 100)) + config.data.currency}</h1>
          </div>
          <div className='expiration_wrap'>
            <Switch on={this.state.switch} onClick={this.handleValidity} className={config.isRtL ? 'switchleft' : 'switchright'} />
            <h1 className='subscription_period'>{config.translations.subscription_period}</h1>
            {this.state.switch && <div className='valid_date'>
              <div className='date_wrap'><h1>{config.translations.valid_until}</h1>
                <input type='date' value={this.state.date} onChange={e => this.setState({date: e.target.value})} />
              </div>
              <h1 className='is_valid'>{config.translations.valid_until_adding + ' ' + this.state.date}</h1>
            </div>}
          </div>
          <div className='buttons'>
            <button style={{backgroundColor: 'darkseagreen'}} onClick={() => this.props.history.push(config.urls.punch_cards)}>
              {config.translations.cancel}</button><button onClick={this.save}>{config.translations.next}</button>
          </div>
        </div>}
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
