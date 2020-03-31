import Share from '../share/share.jsx'
import { default as formatDate } from 'project-components/format-date.js'
import PdfView from './components/pdfView.jsx'
import './gallery.styl'
const images = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'bmp']
const video = ['mpeg4', 'mp4', 'mov', 'mpg', 'mpeg', 'webm']
const music = ['mp3']
export default class Gallery extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }

  state = {
    expand: false,
    openPdfModal: false
  }

  fileIcon = name => {
    let splitedName = name.split('.')
    let typeFile = splitedName[splitedName.length - 1].toLowerCase()
    if (images.find(i => i === typeFile)) return `${config.urls.media}image.svg`
    else if (video.find(i => i === typeFile)) return `${config.urls.media}video.svg`
    else if (music.find(i => i === typeFile)) return `${config.urls.media}audio.svg`
    else return `${config.urls.media}other.svg`
  }

  onError = (e, image) => {
    let target = e.target
    if (!e.target.src.endsWith(config.urls.media)) {
      target.classList.add('previewImg')
      target.src = config.urls.media + 'image_gallery.svg'
    }
  }

  handleOpenClosePdfFile = () => this.setState({ openPdfModal: !this.state.openPdfModal })

  typeItem = i => {
    let src, image
    let splitedName = i.name.split('.')
    let typeFile = splitedName[splitedName.length - 1].toLowerCase()
    if (video.find(i => i === typeFile)) {
      return (<div className='photo-wrap video-block'>
        <video className='media-vid' src={config.urls.gallery + i.name} controls />
      </div>)
    }
    if (typeFile === 'mp3') {
      return (<div className='photo-wrap music-block'>
        <img className='audio-img' src={config.urls.media + 'audio_gallery.svg'} />
        <audio src={config.urls.gallery + i.name} controls />
      </div>)
    } else
    if (typeFile === 'pdf') {
      return (
        <div className='photo-wrap other-file' onClick={this.handleOpenClosePdfFile}>
          <img className='audio-img' src={`${config.urls.media}other_gallery.svg`} />
        </div>)
    }
    if (images.find(i => i === typeFile)) {
      return (
        <div className='photo-wrap'>
          <img className='media-img' src={config.urls.gallery + i.name} onError={this.onError} />
        </div>
      )
    }
    return (
      <a href={config.urls.gallery + i.name} target='_blank' className='photo-wrap other-file'>
        <img className='media-img' src={`${config.urls.media}other_gallery.svg`} />
      </a>)
  }

  nativeShared = () => {
    if (navigator.share) {
      let opt = {
        title: config.translations.media.share_title,
        text: config.translations.media.share_text,
        url: config.urls.gallery_sharing_base_url + config.urls.media + this.props.i.name
      }
      console.log('timeline_opt', opt)
      navigator.share && navigator.share(opt)
    }
  }

  render () {
    const { openPdfModal } = this.state
    return (
      <div id='gallery-timeline'>
        <div className='header'>
          <div className='labels'>
            <img className='img-gallery' src={this.fileIcon(this.props.i.name)} />
            <span className='file-name'>{this.props.i.name}</span>
          </div>
          <div className='share-wrap'>
            { navigator.share
              ? <img onClick={this.nativeShared} className='share' src={config.urls.media + 'ic-share-pink.svg'} />
              : <Share
                {...this.props}
                opt={{
                  title: config.translations.share_title,
                  text: config.translations.share_text,
                  url: config.urls.gallery_sharing_base_url + config.urls.gallery + this.props.i.name
                }}
              />}
          </div>
        </div>
        <div className='order-in'>
          <div className='create-time'>
            <img src={`${config.urls.media}ic_time.svg`} />
            <span>{moment(this.props.i.date).format('HH:mm')}</span>
          </div>
          <div className='create-date'>
            <img src={`${config.urls.media}ic-day.svg`} />
            <span>{formatDate(this.props.i.date)}</span>
          </div>
        </div>
        {this.typeItem(this.props.i)}
        <div className={this.props.i.note ? 'note' : 'hidden'}>
          <div className='title'>
            <span>{`${config.translations.notes.title}`}</span>
          </div>
          <div className='gallery-note'>
            <div className='note-txt'>
              <p className={this.state.expand ? '' : 'ellipsis'}>{this.props.i.note}</p>
            </div>
            <div className='text-expand'>
              <span><img className={this.state.expand ? 'rotate' : ''} src={`${config.urls.media}ic-expand.svg`} onClick={() => this.setState({expand: !this.state.expand})} /></span>
            </div>
          </div>
        </div>
        {openPdfModal && <PdfView show={openPdfModal} fileName={this.props.i.name} close={this.handleOpenClosePdfFile} />}
      </div>
    )
  }
}
