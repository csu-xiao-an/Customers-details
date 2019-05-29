import lazy from '../../../../lazy.js'
import {formatDate, dataURLtoFile, Swiper, Resize, Modal} from 'project-components'
import GalleryModal from '../media-modal/media-modal.jsx'
import GalleryPopup from '../gallery-popup/gallery-popup.jsx'
import {mediaPostService, multiMediaDeleteService} from 'project-services'
import './media.styl'
let $imagePreview
const Share = lazy(() => import('../share/share.jsx').then(r => r.default))
export default class Media extends React.Component {
  state = {
    file: {},
    desc: '',
    slides: [],
    shares: [],
    gallery: {},
    slideAmount: 0,
    firstItem: false,
    initialSlide: 0,
    multiDel: false,
    multiShare: false,
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
          onClick={(this.state.multiDel || this.state.multiShare)
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
          onClick={(this.state.multiDel || this.state.multiShare)
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
        onClick={(this.state.multiDel || this.state.multiShare)
          ? '' : (this.props.rights.gallery.open
            ? () => { this.handleGallery(); this.setState({initialSlide: k}) }
            : () => {})}
      />
    }
  }
  selectSlide = (id, path) => {
    let arr = this.state.slides
    const index = arr.indexOf(id)
    let arrShare = this.state.shares
    let buttonClasses = document.getElementById('slide' + id).classList
    if (index in arr) {
      arr.splice(index, 1)
      arrShare.splice(index, 1)
      buttonClasses.remove('selected')
    } else {
      arr.push(id)
      arrShare.push(path)
      buttonClasses.add('selected')
    }
    this.setState({slides: arr, shares: arrShare})
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
          this.setState({ gallery: filterGallery, slides: [], shares: [], multiDel: !this.state.multiDel, visibleAgreeModal: false })
          this.checkAmountSlides()
        }
      })
    }
  }
    share = () => {
      this.setState({multiShare: !this.state.multiShare})
      if (this.state.multiShare) {
        this.state.slides.map(val => {
          document.getElementById('slide' + val).classList.remove('selected')
        })
        this.setState({slides: [], shares: []})
      }
    }
    nativeShared = () => {
      this.state.shares.map(val => {
        let opt = {
          title: config.translations.share_title,
          text: config.translations.share_text,
          urls: val
        }
        navigator.share && navigator.share(opt)
      })
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
  render () {
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />)
    }
    return config.plugins_list.includes('gallery') && (
      <div id='gallery'>
        <div className='gallery-header'>
          <div className='title'>
            {config.translations.gallery}
          </div>
          <div className='files-amount'>
            {config.data.gallery.length ? (config.translations.files + ': ' + config.data.gallery.length) : (config.translations.files + ': ' + '0')}
            {this.state.slideAmount ? <div className='action'>
              {this.checkAccessLevel
                ? <img className='share' src={config.urls.media + 'ic_share.svg'} onClick={this.share} />
                : ''}
              {this.state.multiDel ? <div className='delete-clicked'
                onClick={() => {
                  if (this.state.multiDel) {
                    let arr = this.state.slides
                    arr.map(val => {
                      document.getElementById('slide' + val).classList.remove('selected')
                    })
                    this.setState({slides: []})
                  }
                  this.setState({multiDel: !this.state.multiDel})
                }}>
                <img src={config.urls.media + 'multi-del-fill.svg'} />
              </div>
                : <div className='delete'
                  onClick={() => {
                    if (this.state.multiDel) {
                      let arr = this.state.slides
                      arr.map(val => {
                        document.getElementById('slide' + val).classList.remove('selected')
                      })
                      this.setState({slides: []})
                    }
                    this.setState({multiDel: !this.state.multiDel})
                  }}>
                  <img src={config.urls.media + 'multi-del-pic.svg'}/>
                </div>}
            </div> : ''}
          </div>
        </div>
        {this.state.isOpenGalleryContex &&
          <GalleryModal handleGallery={this.handleGallery}
            initialSlide={this.state.initialSlide}
            isOpenGallery={this.state.isOpenGallery}
          />}
        <div id='swiper-wrap-gallery'>
          <Swiper spaceBetween={5} slidesPerView='auto' slidesPerGroup={1} slidesPerColumn={2} observer>
            {this.state.gallery.map((i, k) => (
              <div key={i.id} id={'slide' + i.id}
                onClick={() => (this.state.multiDel || this.state.multiShare) && this.selectSlide(i.id, this.state.multiDel
                  ? '' : (config.urls.gallery + i.name).substr(1))
                }
              >
                <div className='img-selected'>
                  {this.typeItem(i, k)}
                  {(this.state.multiDel || this.state.multiShare) && <img className='empty-check' src={config.urls.media + 'checkbox-empty.svg'} />}
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
        {this.state.multiDel && this.state.slides.length === 0 &&
          <button className='multi-del-disabled' disabled>
            <span>{config.translations.delete}</span>
          </button>}
        {this.state.multiDel && this.state.slides.length > 0 &&
          <button className='multi-del' onClick={this.confirmDel}>
            <span>{config.translations.delete}</span>
            <div>
              <img src={config.urls.media + 'trash-del.svg'} />
            </div>
          </button>}
        {this.state.multiShare &&
          <div className={this.state.multiShare ? 'isVisible' : 'hidden'}>
            { navigator.share
              ? <div className='native-share'>
                <img onClick={this.state.shares.length && this.nativeShared} src={config.urls.soc_net + 'share.svg'} />
              </div>
              : <Share {...this.props} opt={{
                title: config.translations.share_title,
                text: config.translations.share_text,
                urls: this.state.shares
              }} />}
          </div>}
        {this.props.rights.gallery.add &&
          <label onClick={() => this.setState({isAddMedia: !this.state.isAddMedia})}
            className={this.state.multiDel || this.state.multiShare
              ? 'hidden'
              : 'gallery-footer'}
          >
            <input id='file-input' className='file-input' type='file' onChange={e => {
              this.addFile(e)
              e.target.value = null
              // this.handleMenuOff(e)
            }} style={{display: 'none'}} />
            <label>{config.translations.add_media}</label>
            <img src={config.urls.media + 'c_add_stroke.svg'} />
          </label>}
        <Modal show={this.state.visibleAgreeModal} onHide={this.cancel}>
          <div className='modal-body-new'>
            <img className='icon' src={config.urls.media + 'trash-del.svg'} />
            <label>{this.state.slides.length > 1 ? config.translations.confirm_del_media_multiple : config.translations.confirm_del_media}</label>
          </div>
          <div className='modal-footer-new'>
            <button className='no-btn' onClick={this.cancel}>{config.translations.cancel}<img className='cancel-img' src={config.urls.media + 'plus-blue.svg'} /></button>
            <button className='yes-btn' onClick={this.multiDeleteFiles}>{config.translations.punch_cards.confirm_btn_label}<img src={config.urls.media + 'confirm.svg'} /></button>
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
            <button className='btn-save' onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div> */}
        {/* <Line /> */}
      </div>
    )
  }
}
