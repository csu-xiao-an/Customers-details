import {getService as punchGetService, postService as punchPostService} from 'project-services/punch.service.js'
import AccessRights from '../access-rights/access-rights.jsx'
import { default as Modal } from 'project-components/Modal/Modal.jsx'
import { default as Switch } from 'project-components/Switch/Switch.jsx'
import { default as ProceduresList } from 'project-components/ProceduresList/ProceduresList.jsx'
import './punch-cards-add.styl'
const INITIAL_STATE = {
  date: moment().year() + '-12-31',
  isCategoryList: false,
  isOpenServices: false,
  discontActive: false,
  editDiscount: false,
  isService: true,
  editDate: false,
  switch: false,
  renderDiscount: true,
  discount: (config.default_value_of_discount && config.default_value_of_discount > 0) ? config.default_value_of_discount : '',
  price: 0,
  total: 0,
  decrementBy: config.decrement_by,
  incrementBy: config.increment_by,
  uses: config.def_count_of_uses,
  data: [],
  i: {}
}
const Control = ({c, l, m, p, v, bool}) => {
  Control.propTypes = {
    l: PropTypes.string.isRequired,
    c: PropTypes.string.isRequired,
    v: PropTypes.string.isRequired,
    p: PropTypes.func.isRequired,
    m: PropTypes.func.isRequired,
    bool: PropTypes.bool
  }
  return (
    <div className={c}>
      <p className='label'>{l}</p>
      <div className={'input-wrap ' + (config.isRTL ? 'left' : 'right')}>
        <button className='ink' onClick={p}><img src={`${config.urls.media}plus.svg`} /></button><input className='count-input' type='text' value={v} disabled />
        <button className='ink' onClick={m} disabled={bool}><img src={`${config.urls.media}minus.svg`} /></button>
      </div>
    </div>
  )
}
const {months} = config.translations.dates
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''

class PunchCardsAdd extends React.Component {
  state = { ...INITIAL_STATE }
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

  save = () => {
    let b = `service_id=${this.state.i.id}&service_count=${this.state.uses}&sum=${this.state.total}&added=${moment().format('YYYY-MM-DD HH:mm:ss')}`
    if (this.state.switch) b = b + `&expiration=${this.state.date}`
    punchPostService(b).then(r => r.status === 201 && r.json().then(id => {
      this.props.history.push(baseUrl + config.urls.punch_cards)
    }))
  }
  activeDiscont = () => {
    this.setState({
      discontActive: !this.state.discontActive,
      renderDiscount: false,
      total: this.state.total - ((this.state.total * this.state.discount) / 100),
      price: this.state.price - ((this.state.price * this.state.discount) / 100)
    }, () => {
      this.state.discontActive && this.refs.discont.focus()
    })
  }
  handleIncrementUses = () => {
    this.setState(prevState => ({
      editDiscount: false,
      renderDiscount: true,
      uses: +prevState.uses + 1
    }), () => this.setState({total: this.state.i.price * this.state.uses, price: this.state.i.price}))
  }
  handleDecrementUses = () => {
    if (+this.state.total > 0) {
      this.setState(prevState => ({
        editDiscount: false,
        renderDiscount: true,
        uses: +prevState.uses - 1
      }), () => this.setState({total: this.state.i.price * this.state.uses, price: this.state.i.price}))
    }
  }
  handleIncrementTotal = () => {
    this.setState(prevState => ({
      editDiscount: false,
      renderDiscount: true,
      total: Math.round(prevState.total) + this.state.incrementBy
    }), () => this.setState({price: Math.round(this.state.total / this.state.uses)}))
  }
  handleDecrementTotal = () => {
    if (+this.state.total > 0) {
      this.setState(prevState => ({
        editDiscount: false,
        renderDiscount: true,
        total: Math.round(prevState.total) - this.state.decrementBy
      }), () => this.setState({price: Math.round(this.state.total / this.state.uses)}))
    }
  }
  getTotal = () => this.setState({total: this.state.price * this.state.uses})
  focusForDiscont = () => {
    this.setState({
      discontActive: true
    }, () => this.state.discontActive && this.refs.discont.focus())
  }
  handleChangeDiscount = () => {
    this.setState({
      total: this.state.i.price * this.state.uses - ((this.state.i.price * this.state.uses * this.state.discount) / 100),
      price: this.state.i.price - ((this.state.i.price * this.state.discount) / 100)
    })
  }
  resetState = () => this.setState({
    isService: true,
    discount: (config.default_value_of_discount && config.default_value_of_discount > 0) ? config.default_value_of_discount : '',
    date: moment().year() + '-12-31',
    renderDiscount: true,
    uses: config.def_count_of_uses,
    editDiscount: false,
    switch: false
  })
  iGoIt = () => {
    this.setState({ date: moment().year() + '-12-31', visibleAgreeModal: false }, this.resetDate)
  }
  toogleOpenServices = () => this.setState({isOpenServices: !this.state.isOpenServices})
  getService = i => this.setState({i: i, price: i.price, isService: false}, () => this.getTotal())
  handleValidity = () => {
    const now = moment()
    const end = moment(this.state.date)
    const duration = now.diff(end, 'day')
    this.setState({
      switch: !this.state.switch,
      duration: duration * (-1)
    })
  }
  resetDate = () => {
    let duration = this.findOutDuration()
    this.setState({ visibleAgreeModal: false, duration: duration * (-1) })
  }
  findOutDuration = () => {
    const now = moment().format('YYYY-MM-DD')
    const end = moment(this.state.date).format('YYYY-MM-DD')
    return moment(now).diff(moment(end), 'day')
  }
  handleToEditExpiryDate = () => {
    this.setState({ editDate: true },
      () => { this.refs.changeDate.focus() })
  }
  handleChangeEditExpiryDate = () => {
    let duration = this.findOutDuration()
    this.setState({
      duration: duration * (-1)
    })
  }
  handleBlurEditExpiryDate = date => {
    if (moment(date).isValid()) {
      this.setState({
        visibleAgreeModal: this.state.duration < 0
      })
    } else {
      let date = moment().year() + '-12-31'
      this.setState({
        date,
        visibleAgreeModal: this.state.duration < 0
      }, this.handleChangeEditExpiryDate)
    }
  }

  handleonBlur = e => {
    let date = (e.target.value)
    this.setState({ editDate: false },
      this.handleBlurEditExpiryDate(date))
  }
  handleChangeDate = e => {
    this.setState({date: e.target.value},
      this.handleChangeEditExpiryDate)
  }
  render () {
    const bgrImg = {
      backgroundImage: `url('${config.urls.media}punch-bg.jpg')`
    }
    return (
      <div id='punch_cards_adding' style={bgrImg}>
        <header className='punch-header'>
          <button className={'prev-button ' + (config.isRTL ? 'prev-button-rtl' : 'prev-button-ltr')} onClick={this.props.rights.topnav.back ? this.state.isService ? this.state.isCategoryList
            ? this.state.isOpenServices ? () => this.toogleOpenServices() : () => window.history.go(-1)
            : () => window.history.go(-1) : this.resetState : () => {}}
          >
            <img src={config.urls.media + 'arrow-back.svg'} />
          </button>
          <div className='header-wrap'>
            <img src={config.urls.media + 'credit-card.svg'} />
            <div className='title'>
              <h2>{config.translations.punch_cards.title_new_punch_card}</h2>
            </div>
          </div>
        </header>
        <div className='preview-img'>
          <div className='preview-wrap'>
            {this.state.isService && <div className='procedure-list'>
              {this.state.data.length > 0 && <ProceduresList data={this.state.data} getService={this.getService}
                isOpenServices={this.state.isOpenServices} toogleOpenServices={this.toogleOpenServices} />}
            </div>}
            {!this.state.isService && <div className='service_edit'>
              <div className='name-wrap'>
                <p className='service-name'><span className='service-color' style={{backgroundColor: this.state.i.color}} />{this.state.i.name}</p>
              </div>
              <div className='single-service'>
                <Control m={this.handleDecrementUses}
                  bool={this.state.uses === 1}
                  p={this.handleIncrementUses}
                  l={config.translations.punch_cards.number_of_uses} v={this.state.uses} c={'uses_wrap'} />
                <div className='upd-discont-wrap'>
                  <button className={'discont-btn ' + (this.state.discontActive && 'active-discont')} onClick={this.state.renderDiscount && this.activeDiscont} >
                    {this.state.discontActive ? <img className='discont-img' src={`${config.urls.media}discont-act.svg`} /> : <img className='discont-img' src={`${config.urls.media}discont-dis.svg`} />}
                    {config.translations.punch_cards.add_discount}
                  </button>
                  <div className='input-wrap'>
                    <div className='persent-wrap'>
                      <input
                        onChange={e => this.setState({discount: e.target.value}, this.handleChangeDiscount)}
                        onBlur={() => this.setState({editDiscount: true, discontActive: false})}
                        ref='discont'
                        className='discont-input'
                        type='number'
                        value={(this.state.discontActive || this.state.editDiscount) ? this.state.discount : ''}
                        placeholder={this.state.discontActive ? config.translations.punch_cards.type_discount : ''}
                        autoFocus={!this.state.discontActive}
                        disabled={!this.state.discontActive}
                      />
                      {(this.state.discontActive || this.state.editDiscount) && this.state.discount && <span className={'persent ' + (config.isRTL ? 'persent-rtl' : 'persent-ltr')}>%</span>}
                    </div>
                    {this.state.editDiscount && <img onClick={this.focusForDiscont} className='discont-img' src={`${config.urls.media}edit-note.svg`} />}
                  </div>
                </div>
                <div className='total_wrap'>
                  <div className='cost-wrap'>
                    <p className='label-cost'>{config.translations.punch_cards.total}</p>
                    <p className='total_num'>{config.translations.punch_cards.price_single}
                      <span className='num'>
                        {this.state.price + ' ' + config.data.currency}
                      </span>
                    </p>
                  </div>
                  <div className='input-wrap'>
                    <button className='ink' onClick={this.handleIncrementTotal}><img src={`${config.urls.media}plus.svg`} /></button>
                    <input className='count-input total-input' type='text' value={this.state.total + ' ' + config.data.currency} disabled />
                    <button className='ink' onClick={this.handleDecrementTotal}><img src={`${config.urls.media}minus.svg`} /></button>
                  </div>
                </div>
                <div className='expiration_wrap'>
                  <p className='subscription_period'>{config.translations.punch_cards.add_expiry_date}</p>
                  <Switch on={this.state.switch} onClick={this.handleValidity} />
                </div>
                {this.state.switch && <div className='valid_date'>
                  <div className='date_wrap'>
                    <p>{config.translations.punch_cards.ends}</p>
                  </div>
                  {moment(this.state.date).isValid() && <div>
                    {this.state.duration >= 0
                      ? <p className='daysLeft'>{config.translations.punch_cards.days_left.replace('{days}', this.state.duration)}</p>
                      : <p className='daysLeft'>{config.translations.punch_cards.days_ago.replace('{days}', this.state.duration * (-1))}</p>
                    }
                  </div>}
                  {this.state.editDate
                    ? <input
                      className='change-expiry-date'
                      onBlur={this.handleonBlur}
                      onChange={this.handleChangeDate}
                      ref='changeDate'
                      type='date'
                      value={this.state.date}
                    />
                    : <p className='is_valid' onClick={this.handleToEditExpiryDate}>{`${moment(this.state.date).format('DD')} ${months[moment(this.state.date).month()]} ${moment(this.state.date).format('YYYY')}`}</p>}
                </div>}
              </div>
              <div className='buttons'>
                <button className='btn-cancel' onClick={() => this.props.history.push(baseUrl + config.urls.punch_cards)}>
                  {config.translations.cancel}<img className='cancel-img' src={`${config.urls.media}plus-blue.svg`} />
                </button>
                <button className='btn-save' onClick={this.save}>
                  {config.translations.add_new_punch_card_btn}<img src={`${config.urls.media}plus-square-white.svg`} />
                </button>
              </div>
            </div>}
          </div>
        </div>
        <Modal show={this.state.visibleAgreeModal} onHide={this.iGoIt}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'alert-octagon.svg'} />
            <label>{config.translations.punch_cards.expiration_modal_text}</label>
          </div>
          <div className='modal-footer'>
            <button className='yes-btn' onClick={this.iGoIt}>{config.translations.i_got_it}<img src={config.urls.media + 'confirm.svg'} /></button>
          </div>
        </Modal>
      </div>
    )
  }
}
export default AccessRights(PunchCardsAdd)
