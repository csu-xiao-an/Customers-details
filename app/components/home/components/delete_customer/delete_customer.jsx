import './delete_customer.styl'
import { default as Modal } from 'project-components/Modal/Modal.jsx'
import { deleteService as clientDeleteService } from 'project-services/client.service.js'

export default class HiddenFields extends React.Component {
  state = {
    isVisiblePopup: false
  }

  static propTypes = {
    rights: PropTypes.object.isRequired
  }

  deleteClient = () => {
    clientDeleteService(config.data.id).then(r => {
      if (r.status === 204) {
        this.setState({ isVisiblePopup: false })
        const regex = new RegExp(config.urls.referrer_patern)
        console.log(regex)
        console.log('document.referrer', document.referrer)
        const result = document.referrer.match(regex) && document.referrer.match(regex)[0]
        console.log('result', result)
        if (result || document.referrer === '') {
          window.location = config.urls.customers_list
        } else {
          window.location = document.referrer
        }
      }
    })
  }

  closePopup = () => this.setState({ isVisiblePopup: false })

  showPopup = () => this.setState({ isVisiblePopup: true })

  render () {
    return this.props.rights.more_fields.isVisible && (
      <div id='delete-customer'>
        <div className='del-btn'>
          <button onClick={this.showPopup}>{config.translations.client_page_btn.delete_customer}</button>
        </div>
        <Modal show={this.state.isVisiblePopup} onHide={this.closePopup}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'icon_delete_selected.svg'} />
            <label>{config.translations.del_сustomer_popup.question.replace('{client_name}', config.data.name)}</label>
          </div>
          <div className='modal-delete-footer'>
            <button className='no-btn' onClick={this.closePopup}>{config.translations.del_сustomer_popup.cancel}</button>
            <button className='yes-btn' onClick={this.deleteClient}>{config.translations.del_сustomer_popup.confirm}</button>
          </div>
        </Modal>
      </div>
    )
  }
}
