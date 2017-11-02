import {dataURLtoFile, getOrientation} from 'project-components'
import MediaModal from '../media-modal/media-modal.jsx'
import {mediaPostService} from 'project-services'
import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import './media.styl'

class Media extends Component {
  constructor () {
    super()
    this.state = {
      isOpenGalleryContex: false,
      isOpenGallery: false,
      imagePreviewUrl: '',
      isAddMedia: false,
      initialSlide: 0,
      file: {},
      desc: ''
    }
  }
  handleGallery = () => {
    this.setState({isOpenGallery: !this.state.isOpenGallery})
    if (this.state.isOpenGalleryContex) setTimeout(() => this.setState({isOpenGalleryContex: false}), 300)
    else this.setState({isOpenGalleryContex: true})
  }
  submit = () => {
    let body = new FormData()
    body.append('file', this.state.file)
    body.append('note', this.state.desc)
    mediaPostService(body).then(r => {
      if (r.status === 201) {
        config.data.gallery.unshift({
          name: this.state.file.name,
          note: this.state.desc,
          date: moment().format('YYYY-MM-DD HH:mm')
        })
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
    if (file.type.indexOf('pdf') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'pdf_file.png'}) } else
    if (file.type.indexOf('video') !== -1) { this.setState({imagePreviewUrl: config.urls.media + 'video_file.png'}) }
  }
  typeItem = (i, k) => {
    let src
    if (i.name.indexOf('mp4') !== -1) {
      return (<div>
        <img src={config.urls.media + 'video_play.png'} className='video_play' />
        <video src={config.urls.gallery + i.name} onClick={() => { this.handleGallery(); this.setState({initialSlide: k}) }} />
      </div>)
    } else {
      if (i.name.indexOf('png') !== -1) { src = config.urls.gallery + i.name } else
      if (i.name.indexOf('mp3') !== -1) { src = config.urls.media + 'audio_file.png' } else
      if (i.name.indexOf('pdf') !== -1) { src = config.urls.media + 'pdf_file.png' }
      return <img src={src} onClick={() => { this.handleGallery(); this.setState({initialSlide: k}) }} />
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
  render () {
    let $imagePreview = null
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />)
    } else {
      $imagePreview = (<div className='previewText'>Please select file for Preview</div>)
    }
    return (
      <div id='gallery'>
        {this.state.isOpenGalleryContex &&
          <MediaModal handleGallery={this.handleGallery} initialSlide={this.state.initialSlide} isOpenGallery={this.state.isOpenGallery} />}
        <div className='label-wrap'>
          <h1 className={config.isRtL ? 'right' : 'left'}>{config.data.gallery.length} {config.translations.item_count}</h1>
          <div className={'gallery-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.gallery}</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable observer>
            {config.data.gallery.map((i, k) => (<div key={k}>{this.typeItem(i, k)}<h1>{i.name}</h1></div>))}
          </Swiper>
        </div>
        <div onClick={() => { this.setState({isAddMedia: !this.state.isAddMedia}) }} className={this.state.isAddMedia ? 'hidden' : 'add-media-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src={config.urls.media + 'add.svg'} />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_media}</h1>
        </div>
        <div className={this.state.isAddMedia ? 'add-media-edit' : 'hidden'}>
          <form className='add-input-wrap' ref='fileAddForm'>
            <input className='file-input' type='file' onChange={e => { this.addFile(e) }} /><div className='previw-wrap'>{$imagePreview}</div>
            <textarea className='note-input' type='text-area' onChange={e => { this.setState({desc: e.target.value}) }} value={this.state.desc} />
          </form>
          <button onClick={this.submit}>{config.translations.save}</button>
        </div>
      </div>
    )
  }
}
export default Media
