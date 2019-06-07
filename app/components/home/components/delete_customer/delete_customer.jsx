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
        window.location = config.urls.client_page_url.replace('{id}', config.data.id)
      }
    })
  }
  render () {
    return this.props.rights.more_fields.isVisible && (
      <div id='delete-customer'>
        <div className='del-btn'>
          <button onClick={() => this.setState({isVisiblePopup: true})}>{config.translations.delete_customer}</button>
        </div>
        <Modal show={this.state.isVisiblePopup}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'icon_delete_selected.svg'} />
            <label>{config.translations.del_question}</label>
          </div>
          <div className='modal-delete-footer'>
            <button className='no-btn' onClick={() => this.setState({isVisiblePopup: false})}>{config.translations.del_no}</button>
            <button className='yes-btn' onClick={() => { this.deleteClient() }}>{config.translations.del_yes}</button>
          </div>
        </Modal>
      </div>
    )
  }
}
