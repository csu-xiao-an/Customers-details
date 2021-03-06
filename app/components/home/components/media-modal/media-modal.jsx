import { replaceService as mediaReplaceService, deleteService as mediaDeleteService } from 'project-services/media.service.js'
import Share from '../share/share.jsx'
import { default as Modal } from 'project-components/Modal/Modal.jsx'
import { default as formatDate } from 'project-components/format-date.js'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import './media-modal.styl'
const video = ['mpeg4', 'mp4', 'mov', 'mpg', 'mpeg', 'webm']
const images = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp']
export default class MediaModal extends React.Component {
  static propTypes = {
    initialSlide: PropTypes.number.isRequired,
    isOpenGallery: PropTypes.bool.isRequired,
    handleGallery: PropTypes.func.isRequired
  }

  state = {
    isEditNote: false,
    textareaValue: '',
    activeIndex: 0
  }

  onEdit (i) {
    if (i.note) {
      this.setState({
        isEditNote: !this.state.isEditNote, 
        textareaValue: config.data.gallery[this.state.activeIndex].note
      })
    } else {
      this.setState({
        isEditNote: !this.state.isEditNote
      })
    }
  }

  componentDidUpdate () {
    if (this.state.isEditNote) {
      const { id } = config.data.gallery[this.state.activeIndex]
      document.getElementById('textarea_id_' + id).focus()
    }
  }

  nativeShared = i => {
    if (navigator.share) {
      let opt = {
        title: config.translations.media.share_title,
        text: config.translations.media.share_text,
        url: config.urls.gallery_sharing_base_url + config.urls.media + i.name
      }
      console.log('gallery_opt', opt)
      navigator.share && navigator.share(opt)
    }
  }

  renderNavigationBnts = () => {
    return (
      <>
        <button onClick={config.isRTL ? this.goNext : this.goPrev} className='swiper-button-prev' type='button'><img src={`${config.urls.media}ic_left.svg`} /></button>
        <button onClick={config.isRTL ? this.goPrev : this.goNext} className='swiper-button-next' type='button'><img src={`${config.urls.media}ic_right.svg`} /></button>
      </>
    )
  }

  renderMediaContent = (typeFile, i) => {
    if (video.find(i => i === typeFile)) { return <video src={config.urls.gallery + i.name} controls /> }
    if (typeFile === 'pdf') { return <iframe src={config.urls.preview_pdf.replace('{url}', config.urls.main + config.urls.url_pdf + i.name)} /> }
    if (typeFile === 'mp3') {
      return (
        <div>
          <img className='audio-img' src={config.urls.media + 'audio_file.png'} />
          <audio src={config.urls.gallery + i.name} controls />
        </div>)
    }
    if (images.find(i => i === typeFile)) { return <img className='gallery-img' src={config.urls.gallery + i.name} /> }
    return (
      <div className='other_file_wrap'>
        <img className='other_file' src={config.urls.media + 'other_gallery.svg'} />
      </div>
    )
  }

  typeItem = (i, k) => {
    const splitedName = i.name.split('.')
    const typeFile = splitedName[splitedName.length - 1].toLowerCase()
    if (this.state.activeIndex === k || this.state.activeIndex === k + 1 || this.state.activeIndex === k - 1) {
      return (
        <div>
          <div className='media-content'>
            {this.renderNavigationBnts()}
            {this.renderMediaContent(typeFile, i)}
          </div>
          <div className='modal-footer'>
            <div className='main'>
              <div className='row1'>
                <span className='name'>{i.name}</span>
                <div className='icons'>
                  {navigator.share
                    ? <img onClick={() => this.nativeShared(i)} className='share' src={config.urls.media + 'ic_share.svg'} />
                    : <Share
                      {...this.props}
                      opt={{
                        title: config.translations.share_title,
                        text: config.translations.share_text,
                        url: config.urls.gallery_sharing_base_url + config.urls.gallery + i.name
                      }}
                    />}
                  <img src={config.urls.media + 'pencil-edit.svg'}
                    style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}}
                    onClick={() => this.onEdit(i)} />
                  <img src={config.urls.media + 'delete.svg'} onClick={() => this.delete(config.data.gallery[this.state.activeIndex].id)} />
                </div>
              </div>
              <div className='row2'>
                <div><img className='icon' src={config.urls.media + 'ic_day.jpg'} style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} /></div>
                <span className='date'>{formatDate(i.date)}</span>
              </div>
            </div>
            {(i.note || this.state.isEditNote) && <div className='data'>
              <span className={this.state.isEditNote ? 'hidden' : 'note'}>
                {config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].note}</span>
              <div className={this.state.isEditNote ? 'edit-form' : 'hidden'}>
                <textarea id={'textarea_id_' + i.id} className={this.state.isEditNote ? 'textarea' : 'hidden'}
                  onChange={e => this.setState({textareaValue: e.target.value})} value={this.state.textareaValue}
                  placeholder={this.state.textareaValue ? this.state.textareaValue : config.translations.gallery_popup_preview_file.add_note}
                />
                <div className='action'>
                  <button className={this.state.isEditNote ? 'btn-save' : 'hidden'}
                    onClick={() => this.replace(config.data.gallery[this.state.activeIndex].id)}>
                    {config.translations.gallery_popup_preview_file.save_edits}
                  </button>
                </div>
              </div>
            </div>}
          </div>
        </div>
      )
    }
  }

  replace = id => {
    const body = `note=${this.state.textareaValue ? this.state.textareaValue : null}`
    mediaReplaceService(body, id).then(r => {
      if (r.status === 204) {
        config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
        config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
        // this.state.textareaValue = config.data.gallery[this.state.activeIndex].note
        this.setState({isEditNote: false, textareaValue: ''})
      }
    })
  }

  cancel = () => {
    this.setState({ visibleAgreeModal: false })
  }

  delete = id => {
    this.setState({ visibleAgreeModal: true, id })
  }

  confirmDelete = () => {
    let id = this.state.id
    mediaDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.gallery.splice(this.state.activeIndex, 1)
        this.props.handleGallery()
        this.setState({activeIndex: 0})
      }
    })
  }

  changeSlide = e => {
    e.container[0].childNodes[0].style.transitionDuration = '300ms'
    this.setState({
      isEditNote: false,
      textareaValue: ''
    })
  }

  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }

  render () {
    return (
      <Modal show={this.props.isOpenGallery} onHide={this.props.handleGallery}>
        <div className='modal-body'>
          <img className='close-button' src={config.urls.media + 'back-del.svg'} onClick={this.props.handleGallery} />
          <Swiper
            observer
            ref={node => { if (node) this.swiper = node.swiper }}
            onSlideChangeStart={e => this.changeSlide(e)}
            onSetTranslate={e => this.setState({ activeIndex: e.activeIndex })}
            slidesPerView='auto'
            initialSlide={this.props.initialSlide}>
            {config.data.gallery.map((i, k) => (<div key={k} className='gallery-swiper-wrap'>{this.typeItem(i, k)}</div>))}
          </Swiper>
        </div>
        <Modal show={this.state.visibleAgreeModal} onHide={this.cancel}>
          <div className='modal-body-new'>
            <img className='icon' src={config.urls.media + 'trash-del.svg'} />
            <label>{config.translations.gallery_popup_delete_file.question_to_del_file}</label>
          </div>
          <div className='modal-footer-new'>
            <button className='no-btn' onClick={this.cancel}>{config.translations.gallery_popup_delete_file.cancel_popup}<img className='cancel-img' src={config.urls.media + 'plus-blue.svg'} /></button>
            <button className='yes-btn' onClick={this.confirmDelete}>{config.translations.gallery_popup_delete_file.confirm_del_file}<img src={config.urls.media + 'confirm.svg'} /></button>
          </div>
        </Modal>
      </Modal>
    )
  }
}
