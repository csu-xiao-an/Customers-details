import Modal from 'project-components/Modal/Modal.jsx'
import './style.styl'
const PdfView = ({ show, fileName, close }) => {
  return (
    <Modal show={show} onHide={close}>
      <div className='modal-body'>
        <img className='close-button' src={config.urls.media + 'back-del.svg'} onClick={close} />
        <iframe src={config.urls.preview_pdf.replace('{url}', config.urls.main + config.urls.url_pdf + fileName)} />
      </div>
    </Modal>
  )
}

export default PdfView
