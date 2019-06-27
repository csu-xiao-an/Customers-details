import PunchHeader from '../panch-header/panch-header.jsx'
import { default as Modal } from 'project-components/Modal/Modal.jsx'
import {postServiceUse as punchPostServiceUse, deleteService as punchDeleteService, getPunchCards as getPunchCardsList, deleteServiceUse as punchDeleteServiceUse} from 'project-services/punch.service.js'
import './single-punch-page.styl'
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''
export default class SinglePunchPage extends React.Component {
  state = {
    punchsList: [],
    singlePunch: {},
    visibleAgreeModal: false,
    deleteStatus: false,
    disabledUse: false,
    isUses: false
  }
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  componentDidMount = () => {
    getPunchCardsList().then(punchsList => {
      const punchCard = punchsList.find(i => i.id === +this.props.match.params.punch_card_id) || {}
      this.setState({
        punchsList,
        singlePunch: punchsList.find(i => i.id === +this.props.match.params.punch_card_id) || {},
        uses: punchCard.uses || []
      })
    })
    if (config.isRTL) document.getElementsByTagName('body')[0].style.direction = 'rtl'
  }
  daysLeft = () => {
    const now = moment()
    const end = moment(this.state.singlePunch && this.state.singlePunch.expiration)
    const duration = now.diff(end, 'day')
    return duration
  }
  del = () => this.setState({ visibleAgreeModal: true })

  confirmDeleteCard = () => {
    punchDeleteService(this.state.singlePunch.id)
      .then(r => {
        if (r.status === 204) {
          this.props.history.push(baseUrl + config.urls.punch_cards)
        } else if (r.status === 422) {
          this.cancel()
          this.unprocessableDelete()
        }
      })
  }
  update = () => this.forceUpdate()
  use = () => {
    this.setState({disabledUse: true})
    const d = moment().format('YYYY-MM-DD HH:mm:ss')
    punchPostServiceUse(this.state.singlePunch.id, `date=${d}`).then(r => r.json().then(r => {
      this.setState(state => ({ uses: [{ id: r, date: d }, ...state.uses], disabledUse: false }))
      if (r) this.setState({ flag: true })
    }))
  }
  delUse = usesId => {
    this.state.uses.length && this.setState({ visibleAgreeModal: true, usesId, isUses: true })
  }
  confirmDel = () => {
    punchDeleteServiceUse(config.data.id, this.state.singlePunch.id, this.state.usesId).then(r => {
      if (r.status === 204) {
        this.setState({
          uses: this.state.uses.filter(uses => uses.id !== this.state.usesId),
          visibleAgreeModal: false,
          isUses: false
        })
      }
    })
  }
  cancel = () => {
    this.setState({ visibleAgreeModal: false, isUses: false })
  }
  handleUseBtnClick = () => {
    if ((this.state.uses && this.state.uses.length >= this.state.singlePunch.service_count) || this.daysLeft() > 0) {
      return false
    } else this.use()
  }
  unprocessableDelete = () => this.setState({ deleteStatus: !this.state.deleteStatus })
  render () {
    const { singlePunch = {}, uses = [] } = this.state
    const sortUses = uses.sort((a, b) => moment(b.date) - moment(a.date))
    const bool = singlePunch && +singlePunch.service_count <= uses.length
    return (
      <div id='single-punch-page'>
        <PunchHeader length={this.state.punchsList.length} />
        <div className='single-punch-wrap'>
          <div className={'single-punch' + ((this.daysLeft() > 0 || bool) ? ' expired' : '')}>
            <button onClick={() => this.del()} className={'delete-btn ' + (config.isRTL ? 'delete-btn-rtl' : 'delete-btn-ltr')}><img src={config.urls.media + 'delete-blue.svg'} />{config.translations.punch_cards.delete_btn_label}</button>
            <div className='punch-preview'>
              <div className='service-wrap'>
                <span className='service-color' />
                <p className='punch-name'>{singlePunch.service_name}</p>
              </div>
              <div className='punch'>
                {/* <p className='count'>{config.translations.punch_cards.used_count_label
                  .replace('{used_count}', uses ? uses.length : '0')
                  .replace('{total_uses}', singlePunch.service_count)}
                </p> */}
                <p className='count'><span>{config.translations.punch_cards.used_count_label.used}</span>
                  <span className='uses'>{uses ? uses.length : '0'}</span>
                  <span className='of'>{config.translations.punch_cards.used_count_label.of}</span>
                  <span className={'total ' + (this.daysLeft() > 0 && 'unused')} >{singlePunch.service_count}</span>
                </p>
              </div>
              <div className={'sum ' + (config.isRTL ? 'sum-rtl' : 'sum-ltr')}><p>{singlePunch.sum}</p><p className='currency'>{config.data.currency}</p></div>
            </div>
            {this.daysLeft() > 0
              ? <button className='expiry-btn'>{config.translations.punch_cards.use_btn_label_expired}</button>
              : (this.state.uses && this.state.uses.length < singlePunch.service_count
                ? <button className='use-btn' disabled={this.state.disabledUse} onClick={this.handleUseBtnClick}>
                  {config.translations.punch_cards.use_btn_label}
                  <img src={config.urls.media + 'check-circle.svg'} /></button>
                : <button className='expiry-btn'>{config.translations.punch_cards.used_punch_card_btn}</button>)}
            {singlePunch.expiration && <div className='expiry-date'>
              <div className='img-wrap'><img src={config.urls.media + 'calendar.svg'} /></div>
              {this.daysLeft() > 0 ? <div className='expiry-text'>
                <p>{config.translations.punch_cards.expiration_label.expiry_date}</p>
                <p className='expiry-formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
              </div> : <div className='expiry-text'>
                <p>{config.translations.punch_cards.expiration_label.expiry_date}</p>
                <p className='formated-date'>{moment(singlePunch.expiration).format('DD/MM/YYYY')}</p>
                <p>{config.translations.punch_cards.expiration_label.within}</p>
                <p className='days-left'>{this.daysLeft() * (-1)}</p>
                <p>{config.translations.punch_cards.expiration_label.days}</p>
              </div>}
            </div>}
            {uses && <div className='uses-wrap'>
              {sortUses.map((el, index) => (<div className='uses'>
                <div className='uses-date'><p>{moment(el.date).format('DD/MM/YYYY')}</p></div>
                <div className='number-select'>
                  <p>{uses.length - [index]}</p>
                  <img className={this.daysLeft() > 0 ? 'expiry-checkbox' : 'checkbox'}
                    src={config.urls.media + 'checkbox-select.svg'}
                    onClick={() => this.delUse(el.id)}
                  />
                </div>
              </div>))}
            </div>}
          </div>
        </div>
        <Modal show={this.state.visibleAgreeModal} onHide={this.cancel}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'trash-del.svg'} />
            <label>{this.state.isUses ? config.translations.punch_cards.use_del_question : config.translations.punch_cards.card_del_question}</label>
          </div>
          <div className='modal-footer'>
            <button className='no-btn' onClick={this.cancel}>{config.translations.cancel}<img className='cancel-img' src={config.urls.media + 'plus-blue.svg'} /></button>
            <button className='yes-btn' onClick={this.state.isUses ? this.confirmDel : this.confirmDeleteCard}>{config.translations.punch_cards.confirm_btn_label}<img src={config.urls.media + 'confirm.svg'} /></button>
          </div>
        </Modal>
        <Modal show={this.state.deleteStatus} onHide={this.unprocessableDelete}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'alert-octagon.svg'} />
            <label className='unprocessable_label'>{config.translations.punch_cards.unprocessable_label}</label>
          </div>
          <div className='modal-footer'>
            <button className='ok-btn' onClick={this.unprocessableDelete}>{config.translations.punch_cards.ok_btn_lable}<img src={config.urls.media + 'confirm.svg'} /></button>
          </div>
        </Modal>
      </div>
    )
  }
}
