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
      <p className='label'>{l}</p>
      <div className={'input-wrap ' + (config.isRTL ? 'left' : 'right')}>
        <div className='ink' onClick={p}><img src={`${config.urls.media}plus.svg`} /></div><input className='count-input' type='text' value={v} disabled />
        <div className='ink' onClick={m}><img src={`${config.urls.media}minus.svg`} /></div>
      </div>
    </div>
  )
}
const {months} = config.translations.dates
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''

class PunchCardsAdd extends React.Component {
  state = {
    date: moment().year() + '-12-31',
    isCategoryList: false,
    isOpenServices: false,
    discontActive: false,
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
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
    punchGetService().then(r => r.status === 200 &&
    r.json().then(data => {
      let isCat = data.length < config.max_services_shown_without_cat + 1 || !data.some(i => data[0].category.id !== i.category.id)
      this.setState({data, isOpenServices: isCat, isCategoryList: !isCat})
    }))
  }
  daysLeft = () => {
    const now = moment()
    const end = moment(this.state.date)
    const duration = now.diff(end, 'day')
    return duration
  }
  save = () => {
    let b = `service_id=${this.state.i.id}&uses=${this.state.uses}&sum=${this.state.total}&date=${moment().format('YYYY-MM-DD hh:mm:ss')}`
    if (this.state.switch) b = b + `&expiration=${this.state.date}`
    punchPostService(b).then(r => r.status === 201 && r.json().then(id => {
      this.props.history.push(baseUrl + config.urls.punch_cards)
    }))
  }
  getTotal = () => this.setState({total: this.state.i.price * this.state.uses - ((this.state.i.price * this.state.uses * this.state.discount) / 100)})
  toogleOpenServices = () => this.setState({isOpenServices: !this.state.isOpenServices})
  getService = i => this.setState({i: i, isService: false}, () => this.getTotal())
  handleValidity = () => this.setState({switch: !this.state.switch})
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}punch-bg.jpg')`
    }
    return (
      <div id='punch_cards_adding' style={bgrImg}>
        <header className='punch-header'>
          <button className={'prev-button ' + (config.isRTL && 'prev-button-rtl')} onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
            ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
            : () => window.history.go(-1) : () => this.setState({isService: true}) : () => {}}
          >
            <img src={config.urls.media + 'arrow-back.svg'} />
          </button>
          <div className='header-wrap'>
            <img src={config.urls.media + 'credit-card.svg'} />
            <div className='title'>
              <h2>{config.translations.new_punch_card}</h2>
            </div>
          </div>
        </header>
        <div className='preview-img'>
          <div className='preview-wrap'>
            <div style={this.state.isService ? {display: 'block', width: '100%'} : {display: 'none'}}>
              {this.state.data.length > 0 && <ProceduresList data={this.state.data} getService={this.getService}
                isOpenServices={this.state.isOpenServices} toogleOpenServices={this.toogleOpenServices} />}
            </div>
            {!this.state.isService && <div className='service_edit'>
              <div className='name-wrap'>
                <p className='service-name'><span className='service-color' style={{backgroundColor: this.state.i.color}} />{this.state.i.name}</p>
              </div>
              <div className='single-service'>
                <Control m={() => { if (+this.state.uses > 0) this.setState({uses: +this.state.uses - 1}, () => this.getTotal()) }}
                  p={() => this.setState({uses: +this.state.uses + 1}, () => this.getTotal())}
                  l={config.translations.number_of_uses} v={this.state.uses} c={'uses_wrap'} />
                <div className='upd-discont-wrap'>
                  <button className={'discont-btn ' + (this.state.discontActive && 'active-discont')} onClick={() => this.setState({discontActive: !this.state.discontActive})} >
                    {this.state.discontActive ? <img className='discont-img' src={`${config.urls.media}discont-act.svg`} /> : <img className='discont-img' src={`${config.urls.media}discont-dis.svg`} />}
                    {config.translations.add_discount}
                  </button>
                  <div className={'input-wrap'}>
                    <input className='discont-input' type='text' onChange={e => this.setState({discount: e.target.value}, () => this.getTotal())} placeholder={this.state.discontActive ? config.translations.type_discount : ''} disabled={!this.state.discontActive} />
                    {/* {this.state.discontActive && <img className='discont-img' src={`${config.urls.media}edit-note.svg`} />} */}
                  </div>
                </div>
                <div className='total_wrap'>
                  <div className='cost-wrap'>
                    <p className='label-cost'>{config.translations.total}</p>
                    <p className='total_num'>{config.translations.price_single}
                      <span className='num'>
                        {(this.state.i.price - ((this.state.i.price * this.state.discount) / 100)) + config.data.currency}
                      </span>
                    </p>
                  </div>
                  <div className='input-wrap'>
                    <div className='ink' onClick={() => this.setState({total: Math.round(this.state.total) + 10})}><img src={`${config.urls.media}plus.svg`} /></div><input className='count-input total-input' type='text' value={this.state.total + config.data.currency} disabled />
                    <div className='ink' onClick={() => { if (+this.state.total > 0) this.setState({total: Math.round(this.state.total) - 10}) }}><img src={`${config.urls.media}minus.svg`} /></div>
                  </div>
                </div>
                {/* <Control m={() => { if (+this.state.discount > 0) this.setState({discount: +this.state.discount - 1}, () => this.getTotal()) }}
                  p={() => this.setState({discount: +this.state.discount + 1}, () => this.getTotal())}
                  l={config.translations.discount} v={this.state.discount + '%'} c={'discount_wrap'} />
                <Control m={() => { if (+this.state.total > 0) this.setState({total: Math.round(this.state.total) - 10}) }}
                  l={config.translations.total} v={this.state.total + config.data.currency} c={'total_wrap'}
                  p={() => this.setState({total: Math.round(this.state.total) + 10})} />
                <h1 className='total_num'>{config.translations.price_single + ' ' + (this.state.i.price -
                  ((this.state.i.price * this.state.discount) / 100)) + config.data.currency}</h1> */}
                <div className='expiration_wrap'>
                  <p className='subscription_period'>{config.translations.add_expiry_date}</p>
                  <Switch on={this.state.switch} onClick={this.handleValidity} className={config.isRTL ? 'switchleft' : 'switchright'} />
                </div>
                {this.state.switch && <div className='valid_date'>
                  <div className='date_wrap'>
                    <p>{config.translations.ends}</p>
                  </div>
                  <p className='daysLeft'>{config.translations.days_left.replace('{days}', this.daysLeft() * (-1))}</p>
                  <p className='is_valid'>{`${moment(this.state.date).format('DD')} ${months[moment(this.state.date).month()]} ${moment().format('YYYY')}`}</p>
                </div>}
              </div>
              <div className='buttons'>
                <button className='btn-cancel' onClick={() => this.props.history.push(baseUrl + config.urls.punch_cards)}>
                  {config.translations.cancel}<img className='cancel-img' src={`${config.urls.media}plus-blue.svg`} />
                </button>
                <button className='btn-save' onClick={this.save}>
                  {config.translations.next}<img src={`${config.urls.media}plus-square-white.svg`} />
                </button>
              </div>
            </div>}
          </div>
        </div>
        {/* <div className='topnav_punch'>
          <div className='header'>
            <div className='arrow-wrap' style={config.isRTL ? {float: 'right'} : {float: 'left'}} onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
              ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
              : () => window.history.go(-1) : () => this.setState({isService: true}) : () => {}}>
              <img style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} className='arrow-back' src={config.urls.media + 'arrow-back.svg'} /></div>
            <span className='before' />
            {this.state.isService && <div className='client-name'><h1>{config.translations.new_punch}</h1></div>}
            {!this.state.isService && <div className='client-name'>
              <h1>{config.translations.punch_service.replace('{service_name}', this.state.i.name)}</h1></div>}
            <div className='edit-wrap' style={config.isRTL ? {float: 'left'} : {float: 'right'}} />
          </div>
        </div> */}
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
