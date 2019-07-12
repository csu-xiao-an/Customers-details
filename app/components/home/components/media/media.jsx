import { default as Modal } from 'project-components/Modal/Modal.jsx'
import { default as Swiper } from 'project-components/Swiper/Swiper.js'
import { default as formatDate } from 'project-components/format-date.js'
import { default as dataURLtoFile } from 'project-components/decodeBase64.js'
import { default as Resize } from 'project-components/resize.js'
import GalleryModal from '../media-modal/media-modal.jsx'
import GalleryPopup from '../gallery-popup/gallery-popup.jsx'
import {postService as mediaPostService, multiDeleteService as multiMediaDeleteService} from 'project-services/media.service.js'
import './media.styl'
let $imagePreview
export default class Media extends React.Component {
  state = {
    file: {},
    desc: '',
    slides: [],
    gallery: {},
    slideAmount: 0,
    firstItem: false,
    initialSlide: 0,
    multiDel: false,
    isAddMedia: false,
    imagePreviewUrl: '',
    isOpenGallery: false,
    isOpenGalleryContex: false,
    previewOther: false,
    flag: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }
  handleGallery = () => {
    this.setState({isOpenGallery: !this.state.isOpenGallery})
    if (this.state.isOpenGalleryContex) setTimeout(() => this.setState({isOpenGalleryContex: false}), 300)
    else this.setState({isOpenGalleryContex: true})
  }
  submit = () => {
    const date = moment(this.state.file.lastModified).format('YYYY-MM-DD HH:mm:ss')
    let body = new FormData()
    body.append('file', this.state.file)
    body.append('date', date)
    this.setState({flag: true})
    if (this.state.desc !== '') body.append('note', this.state.desc)
    mediaPostService(body).then(r => {
      let newId = r.data.id
      if (r.status) {
        this.setState({flag: false})
      }
      if (r.status === 201) {
        let data = {
          date: date,
          name: r.data.name
        }
        if (this.state.desc !== '') data.note = this.state.desc
        config.data.gallery.unshift(data)
        config.data.gallery[0].id = newId
        this.props.addedItemInGallery(date, this.state.file.name, this.state.desc, newId)
        this.setState({imagePreviewUrl: '', isAddMedia: !this.state.isAddMedia, desc: '', file: {}},
          () => {
            $imagePreview = null
          })
        document.querySelector('body').classList.remove('no-scroll')
        this.checkAmountSlides()
      }
    })
  }
  checkAmountSlides = () => { this.setState({ slideAmount: config.data.gallery.length }) }
  addFile = e => {
    let file = e.target.files[0]
    if (e.target.files.length && file.type.indexOf('image') !== -1) { e.preventDefault(); Resize(file, this.bar) } else
    if (e.target.files.length && file.type.indexOf('audio') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'audio_gallery.svg', previewOther: true}) } else
    if (e.target.files.length && file.type.indexOf('video') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'video_gallery.svg', previewOther: true}) } else
    if (e.target.files.length && file.type.indexOf('pdf') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'other_gallery.svg', previewOther: true}) } else
    if (e.target.files.length && file.type.indexOf('') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'other_gallery.svg', previewOther: true}) }
    this.setState({file: file})
    document.querySelector('body').classList.toggle('no-scroll')
    this.forceUpdate()
  }
  bar = url => {
    this.setState({
      imagePreviewUrl: url,
      file: dataURLtoFile(url, `${this.state.file.name}`)
    })
  }
  typeItem = (i, k) => {
    let src
    let newName = i.name.toLowerCase()
    if (newName.indexOf('mp4') !== -1) {
      // this.setState({previewVideo: true})
      return (<div className='video-block'>
        <img src={config.urls.media + 'video_play.png'} className='video_play media' />
        <video className='media-vid'
          src={config.urls.gallery + newName}
          onClick={this.state.multiDel
            ? ''
            : (this.props.rights.gallery.open
              ? () => { this.handleGallery(); this.setState({initialSlide: k}) }
              : () => {})}
        />
      </div>)
    } else if (newName.indexOf('webm') !== -1) {
      // this.setState({previewVideo: true})
      return (<div className='video-block'>
        <img src={config.urls.media + 'video_play.png'} className='video_play media' />
        <video className='media-vid'
          src={config.urls.gallery + newName}
          onClick={this.state.multiDel
            ? ''
            : (this.props.rights.gallery.open
              ? () => { this.handleGallery(); this.setState({ initialSlide: k }) }
              : () => { })}
        />
      </div>)
    } else {
      if (newName.indexOf('mp3') !== -1) { src = config.urls.media + 'audio_gallery.svg' } else
      if (newName.indexOf('pdf') !== -1) { src = config.urls.media + 'other_gallery.svg' } else
      if (newName.split(/png|jpg|bmp|jpeg|gif|webp/i).pop() !== -1) { src = config.urls.gallery + newName }
      return <img className='media-img'
        src={src}
        onClick={this.state.multiDel
          ? '' : (this.props.rights.gallery.open
            ? () => { this.handleGallery(); this.setState({initialSlide: k}) }
            : () => {})}
      />
    }
  }
  selectSlide = id => {
    let arr = this.state.slides
    const index = arr.indexOf(id)
    let buttonClasses = document.getElementById('slide' + id).classList
    if (index in arr) {
      arr.splice(index, 1)
      buttonClasses.remove('selected')
    } else {
      arr.push(id)
      buttonClasses.add('selected')
    }
    this.setState({slides: arr})
  }
  multiDeleteFiles = () => {
    let slides = this.state.slides
    if (slides.length > 0) {
      multiMediaDeleteService(slides).then(r => {
        if (r.status === 204) {
          let filterGallery = this.state.gallery
          filterGallery = filterGallery.filter(i => !slides.includes(i.id))
          config.data.gallery = filterGallery
          slides.map(val => {
            document.getElementById('slide' + val).classList.remove('selected')
          })
          this.setState({ gallery: filterGallery, slides: [], multiDel: !this.state.multiDel, visibleAgreeModal: false })
          this.checkAmountSlides()
        }
      })
    }
  }
    checkAccessLevel = () => {
      return ((config.user.permission_level === 'admin' ||
            config.user.permission_level === 'senior' ||
            config.user.permission_level === 'junior'))
    }
  componentDidMount = () => { this.setState({slideAmount: config.data.gallery.length}) }
  componentWillMount = () => {
    if (!Array.isArray(config.data.gallery)) config.data.gallery = []
    this.setState({gallery: config.data.gallery})
  }
  handleMenuOff = () => {
    this.setState({isAddMedia: false, previewOther: false, imagePreviewUrl: '', file: {}},
      () => {
        $imagePreview.type = null
        $imagePreview = null
        this.forceUpdate()
      })
    document.querySelector('body').classList.remove('no-scroll')
  }
  handleDescBack = e => {
    this.setState({desc: e.target.value})
  }
  cancel = () => {
    this.setState({ visibleAgreeModal: false })
  }
  confirmDel = () => {
    this.setState({ visibleAgreeModal: true })
  }
  handleMultiDeleteClick = () => {
    this.setState({multiDel: !this.state.multiDel}, () => {
      let arr = this.state.slides
      arr.map(val => {
        document.getElementById('slide' + val).classList.remove('selected')
      })
      this.setState({slides: []})
    })
  }
  render () {
    const { multiDel } = this.state
    let checkLength = this.state.slides.length === 0
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />)
    }
    return config.plugins_list.includes('gallery') && (
      <div id='gallery'>
        <div className='gallery-header'>
          <div className='title'>
            {config.translations.media.title}
          </div>
          <div className='files-amount'>
            {config.data.gallery.length ? (config.translations.media.files + ': ' + config.data.gallery.length) : (config.translations.media.files + ': ' + '0')}
            {this.state.slideAmount && <div className='action'>
              <div className={'delete' + (multiDel ? ' delete-clicked' : '')}
                onClick={this.handleMultiDeleteClick}>
                <img src={config.urls.media + (multiDel ? 'multi-del-fill.svg' : 'multi-del-pic.svg')} />
              </div>
            </div>}
          </div>
        </div>
        {this.state.isOpenGalleryContex &&
          <GalleryModal {...this.props} handleGallery={this.handleGallery}
            initialSlide={this.state.initialSlide}
            isOpenGallery={this.state.isOpenGallery}
          />}
        <div id='swiper-wrap-gallery'>
          <Swiper spaceBetween={5} slidesPerView='auto' slidesPerGroup={1} slidesPerColumn={2} observer>
            {this.state.gallery.map((i, k) => (
              <div key={i.id} id={'slide' + i.id}
                onClick={() => this.state.multiDel && this.selectSlide(i.id)
                }
              >
                <div className='img-selected'>
                  {this.typeItem(i, k)}
                  {this.state.multiDel && <img className='empty-check' src={config.urls.media + 'checkbox-empty.svg'} />}
                </div>
                <div className='check-box'>
                  <img src={config.urls.media + 'checkbox-select.svg'} />
                </div>
                <div className='file-name'>{i.name}</div>
                <div className='file-date'>
                  <div><img className='day-icon' style={config.isRTL ? {transform: 'scale(-1, 1)'} : {}} src={config.urls.media + 'ic_day-2.jpg'} /></div>
                  <label className='date'>{formatDate(i.date)}</label>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        {this.state.multiDel &&
          <button className='multi-del' disabled={checkLength} onClick={this.confirmDel}>
            <span>{config.translations.media.media_delete}</span>
            <img src={config.urls.media + (checkLength ? 'trash-del-disable.svg' : 'trash-del.svg')} />
          </button>}
        {this.props.rights.gallery.add && !this.state.multiDel &&
          <label onClick={() => this.setState({isAddMedia: !this.state.isAddMedia})}
            className='gallery-footer'
          >
            <input id='file-input' className='file-input' type='file' onChange={e => {
              this.addFile(e)
              e.target.value = null
            }} />
            <label>{config.translations.media.add_media}</label>
            <img src={config.urls.media + 'c_add_stroke.svg'} />
          </label>}
        <Modal show={this.state.visibleAgreeModal} onHide={this.cancel}>
          <div className='modal-body-new'>
            <img className='icon' src={config.urls.media + 'trash-del.svg'} />
            <label>{this.state.slides.length > 1 ? config.translations.media.confirm_del_media_multiple : config.translations.media.confirm_del_media}</label>
          </div>
          <div className='modal-footer-new'>
            <button className='no-btn' onClick={this.cancel}>{config.translations.media.cancel_media}<img className='cancel-img' src={config.urls.media + 'plus-blue.svg'} /></button>
            <button className='yes-btn' onClick={this.multiDeleteFiles}>{config.translations.media.confirm_del}<img src={config.urls.media + 'confirm.svg'} /></button>
          </div>
        </Modal>
        {this.state.imagePreviewUrl &&
        <GalleryPopup
          preview={$imagePreview}
          previewOther={this.state.previewOther}
          handleMenuOff={this.handleMenuOff}
          submit={this.submit}
          handleDescBack={this.handleDescBack}
          flag={this.state.flag}
        />
        }
        {/* <div className={this.state.isAddMedia ? 'add-media-edit' : 'hidden'}>
          <form className='add-input-wrap' ref='fileAddForm'>
            <div className='previw-wrap'>{$imagePreview}</div>
            <input className='file-input' type='file' onChange={e => this.addFile(e)} />
            <textarea className='note-input' type='text-area' onChange={e => this.setState({desc: e.target.value})} value={this.state.desc} />
          </form>
          <div className='action'>
          </div>
        </div> */}
        {/* <Line /> */}
      </div>
    )
  }
}
