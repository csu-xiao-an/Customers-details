import {formatDate, dataURLtoFile, getOrientation, Swiper} from 'project-components'
import GalleryModal from '../media-modal/media-modal.jsx'
import {mediaPostService, multiMediaDeleteService} from 'project-services'
import Line from '../line/line.jsx'
import './media.styl'
import Share from '../share/share.jsx'

export default class Media extends React.Component {
  state = {
    file: {},
    desc: '',
    slides: [],
    shares: [],
    gallery: {},
    slideAmount: 0,
    initialSlide: 0,
    multiDel: false,
    multiShare: false,
    isAddMedia: false,
    imagePreviewUrl: '',
    isOpenGallery: false,
    isOpenGalleryContex: false
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
    const d = moment(this.state.file.lastModified).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
    let body = new FormData()
    body.append('file', this.state.file)
    body.append('date', d)
    if (this.state.desc !== '') body.append('note', this.state.desc)
    mediaPostService(body).then(r => {
      if (r.status === 201) {
        let data = {
          date: d,
          name: this.state.file.name
        }
        if (this.state.desc !== '') data.note = this.state.desc
        config.data.gallery.unshift(data)
        r.json().then(id => { config.data.gallery[0].id = id })
        this.setState({imagePreviewUrl: '', isAddMedia: !this.state.isAddMedia, desc: '', file: {}})
        this.refs.fileAddForm.reset()
      }
    })
  }
  addFile = e => {
    let file = e.target.files[0]
    this.setState({file: file})
    if (file.type.indexOf('image') !== -1) { e.preventDefault(); this.resize(file) } else
    if (file.type.indexOf('audio') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'audio_file.png'}) } else
    if (file.type.indexOf('video') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'video_file.png'}) } else
    if (file.type.indexOf('pdf') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'pdf_file.png'}) }
  }
  typeItem = (i, k) => {
    let src
    if (i.name.indexOf('mp4') !== -1) {
      return (<div className='video-block'>
        <img src={config.urls.media + 'video_play.png'} className='video_play media' />
        <video className='media'
          src={config.urls.gallery + i.name}
          onClick={(this.state.multiDel || this.state.multiShare)
            ? ''
            : (this.props.rights.gallery.open
              ? () => { this.handleGallery(); this.setState({initialSlide: k}) }
              : () => {})}
        />
      </div>)
    } else {
      if (i.name.indexOf('png') !== -1) { src = config.urls.gallery + i.name } else
      if (i.name.indexOf('mp3') !== -1) { src = config.urls.media + 'audio_file.png' } else
      if (i.name.indexOf('pdf') !== -1) { src = config.urls.media + 'pdf_file.png' }
      return <img className='media'
        src={src}
        onClick={(this.state.multiDel || this.state.multiShare)
          ? '' : (this.props.rights.gallery.open
            ? () => { this.handleGallery(); this.setState({initialSlide: k}) }
            : () => {})}
      />
    }
  }
  resize = f => {
    let img = new Image()
    getOrientation(f, or => {
      let reader = new FileReader()
      reader.readAsDataURL(f)
      reader.onload = () => { img.src = reader.result }
      img.onload = () => {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        let w = img.width
        let h = img.height
        if (w > config.data.max_side || h > config.data.max_side) {
          if (w > h) {
            if (w > config.data.max_side) {
              h = (h * config.data.max_side) / w
              w = config.data.max_side
            }
          } else {
            if (h > config.data.max_side) {
              w = (w * config.data.max_side) / h
              h = config.data.max_side
            }
          }
        }
        if (or > 4 && or < 9) {
          canvas.width = h
          canvas.height = w
        } else {
          canvas.width = w
          canvas.height = h
        }
        switch (or) {
        case 2: ctx.transform(-1, 0, 0, 1, w, 0); break
        case 3: ctx.transform(-1, 0, 0, -1, w, h); break
        case 4: ctx.transform(1, 0, 0, -1, 0, h); break
        case 5: ctx.transform(0, 1, 1, 0, 0, 0); break
        case 6: ctx.transform(0, 1, -1, 0, h, 0); break
        case 7: ctx.transform(0, -1, -1, 0, h, w); break
        case 8: ctx.transform(0, -1, 1, 0, 0, w); break
        default: break
        }
        ctx.drawImage(img, 0, 0, w, h)
        let dataURL = canvas.toDataURL()
        this.setState({imagePreviewUrl: dataURL, file: dataURLtoFile(dataURL, 'media.png')})
      }
    })
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
          let gallery = this.state.gallery
          gallery.map((val, index) => {
            if (slides.indexOf(val.id) >= 0) {
              gallery.splice(index, 1)
            }
          })
          slides.map(val => {
            document.getElementById('slide' + val).classList.remove('selected')
          })
          this.setState({gallery: gallery, slides: [], shares: []})
        }
      })
    }
  }
    share = () => {
      if (navigator.share) {
        this.state.shares.map(val => {
          let opt = {
            title: config.translations.share_title,
            text: config.translations.share_text,
            urls: val
          }
          navigator.share(opt)
        })
        //
        // .then(() => console.log('Successful share'))
        // .catch(er => console.log('Error sharing', er))
      } else this.setState({multiShare: !this.state.multiShare})
      if (this.state.multiShare) {
        this.state.slides.map(val => {
          document.getElementById('slide' + val).classList.remove('selected')
        })
        this.setState({slides: [], shares: []})
      }
    }
    renderCheck = () => {
      return <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'>
        <g id='customer-page-(corrected-design)' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='Customer-Page' transform='translate(-553.000000, -961.000000)'>
            <g id='1.personal-info' transform='translate(249.000000, 489.000000)'>
              <g id='ic-check-box' transform='translate(302.000000, 470.000000)'>
                <polygon id='Shape' points='0 0 20 0 20 20 0 20' />
                <path d='M16.2222222,2 L3.77777778,2 C2.79555556,2 2,2.79555556 2,3.77777778 L2,16.2222222 C2,17.2044444 2.79555556,18 3.77777778,18 L16.2222222,18 C17.2044444,18 18,17.2044444 18,16.2222222 L18,3.77777778 C18,2.79555556 17.2044444,2 16.2222222,2 Z M8.22222222,14.4444444 L3.77777778,10 L5.03555556,8.74222222 L8.22222222,11.9288889 L14.9644444,5.18666667 L16.2222222,6.44444444 L8.22222222,14.4444444 Z' id='Shape' fill='#5E36B1' fillRule='nonzero' />
              </g>
            </g>
          </g>
        </g>
      </svg>
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
  render () {
    let $imagePreview = null
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />)
    } else {
      $imagePreview = (<div className='previewText'>Please select file for Preview</div>)
    }
    return config.plugins_list.includes('gallery') && (
      <div id='gallery'>
        <div className='gallery-header'>
          <div className='title'>
            {config.translations.gallery}
          </div>
          <div className='files-amount'>
            {config.translations.files + ': ' + this.state.slideAmount}
            <div className='action'>
              {this.checkAccessLevel
                ? <img className='share' src={config.urls.media + 'ic_share.svg'} onClick={this.share} />
                : ''}
              <img className='delete' src={config.urls.media + 'ic_del.svg'}
                onClick={() => {
                  if (this.state.multiDel) {
                    let arr = this.state.slides
                    arr.map(val => {
                      document.getElementById('slide' + val).classList.remove('selected')
                    })
                    this.setState({slides: []})
                  }
                  this.setState({multiDel: !this.state.multiDel})
                }}
              />
            </div>
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
              <div key={k} id={'slide' + i.id}
                onClick={() => (this.state.multiDel || this.state.multiShare) && this.selectSlide(i.id, this.state.multiDel
                  ? '' : (config.urls.gallery + i.name).substr(1))}
              >
                <div className='img-selected'>
                  {this.typeItem(i, k)}
                </div>
                <div className='check-box'>
                  {this.renderCheck()}
                </div>
                <label className='file-name'>{i.name}</label>
                <div className='file-date'>
                  <img className='day-icon' src={config.urls.media + 'ic_day_min.svg'} />
                  <label className='date'>{formatDate(i.date)}</label>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
        {this.state.multiDel
          ? (<div className='multi-del' onClick={this.multiDeleteFiles}>
            <span>{config.translations.delete}</span>
          </div>)
          : this.state.multiShare ? (
            <div className={this.state.multiShare ? 'isVisible' : 'hidden'}>
              <Share {...this.props} opt={{
                title: config.translations.share_title,
                text: config.translations.share_text,
                urls: this.state.shares
              }} />
            </div>
          )
            : (this.props.rights.gallery.add &&
            <div onClick={() => this.setState({isAddMedia: !this.state.isAddMedia})}
              className={this.state.isAddMedia
                ? 'hidden'
                : 'gallery-footer'}
            >
              <label>{config.translations.add_media}</label>
              <img src={config.urls.media + 'c_add_stroke.svg'} />
            </div>)}
        <div className={this.state.isAddMedia ? 'add-media-edit' : 'hidden'}>
          <form className='add-input-wrap' ref='fileAddForm'>
            <div className='previw-wrap'>{$imagePreview}</div>
            <input className='file-input' type='file' onChange={e => this.addFile(e)} />
            <textarea className='note-input' type='text-area' onChange={e => this.setState({desc: e.target.value})} value={this.state.desc} />
          </form>
          <div className='action'>
            <button className='btn-save' onClick={this.submit}>{config.translations.save}</button>
          </div>
        </div>
        {/* <Line /> */}
      </div>
    )
  }
}
