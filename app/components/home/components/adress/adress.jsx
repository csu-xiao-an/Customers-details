import {clientReplaceService, adressGetService} from 'project-services'
import Line from '../line/line.jsx'
import './adress.styl'
let timeout

export default class Adress extends React.Component {
  state = {
    adressEdit: false,
    isViewAdress: false,
    adress_list: [],
    adress: ''
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  submit = () => {
    const body = `${config.urls.address}=${this.state.adress}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.adress = this.state.adress
        this.setState({ adressEdit: !this.state.adressEdit, isViewAdress: false, adress: '' })
      }
    })
  }
  changeInput = e => {
    clearTimeout(timeout)
    this.setState({adress: e})
    if (e.length > 0) {
      timeout = setTimeout(() => adressGetService(e).then(r => r.json().then(r =>
        this.setState({isViewAdress: true, adress_list: r.results}))), config.data.timeout)
    } else this.setState({isViewAdress: false})
  }
  render () {
    return (
      <div id='adress'>
        <div className={config.data.adress ? this.state.adressEdit ? 'hidden' : 'adress' : 'hidden'}>
          <div className={'google-map ' + (config.isRtL ? 'right' : 'left')}>
            <a href={this.props.rights.adress.waze ? 'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes' : false}>
              <img src={config.urls.main + '/customers-details/clients/' + config.data.id + '/map'} /></a>
          </div>
          <div className='data-wrap'>
            <div className='adress-label-wrap'><div className={'adress-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.adress}</div></div>
            <div className={'address ' + (config.isRtL ? 'left' : 'right')}>
              <a href={this.props.rights.adress.waze ? 'waze://?ll=' + config.data.intent_x + ', ' + config.data.intent_y + '&navigate=yes' : false}>
                <img src={config.urls.media + 'waze.png'} /></a>
              <h1 className={config.isRtL ? 'left' : 'right'}
                onClick={this.props.rights.adress.edit ? () => this.setState({adressEdit: !this.state.adressEdit, adress: config.data.adress}) : () => {}}>{config.data.adress}</h1>
            </div>
          </div>
        </div>
        {this.props.rights.adress.add &&
          <div onClick={() => this.setState({adressEdit: !this.state.adressEdit})}
            className={config.data.adress || this.state.adressEdit ? 'hidden' : 'add-adress'}>
            <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
            <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_adress}</h1>
          </div>}
        <div className={this.state.adressEdit ? 'adress-edit' : 'hidden'}>
          <div className='edit'><input className='edit-input' type='text' value={this.state.adress} onChange={e => this.changeInput(e.target.value)} />
            <div className={this.state.isViewAdress ? 'adress-list-wrap' : 'hidden'}>
              {this.state.adress_list.map((i, k) => (
                <div key={k} onClick={() => this.setState({adress: i.formatted_address, isViewAdress: false})}>{i.formatted_address}</div>)
              )}
            </div>
            <h1 className='edit-label'>{config.translations.adress}</h1>
          </div>
          <div className='button'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
        <Line />
      </div>
    )
  }
}