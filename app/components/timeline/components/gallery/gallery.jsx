import Share from '../share/share.jsx'
import {formatDate, dataURLtoFile, Swiper, Resize} from 'project-components'
import './gallery.styl'

export default class Gallery extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }

  state = {
    expand: false
  }
  fileIcon = name => {
    let splitedName = name.split('.')
    let typeFile = splitedName[splitedName.length - 1]
    const image = ['png', 'jpg', 'jpeg', 'svg', 'gif']
    const video = ['mpeg4', 'mp4', 'mov', 'mpg', 'mpeg']
    const music = ['mp3']
    if (image.find(i => i === typeFile)) return `${config.urls.media}image.svg`
    else if (video.find(i => i === typeFile)) return `${config.urls.media}video.svg`
    else if (music.find(i => i === typeFile)) return `${config.urls.media}audio.svg`
    else return `${config.urls.media}other.svg`
  }
  onError = (e, image) => {
    if (!e.target.src.endsWith(config.urls.media)) {
      e.target.src = config.urls.media + image
    }
  }
  typeItem = i => {
    let src, image
    if (i.name.indexOf('mp4') !== -1) {
      return (<div className='photo-wrap video-block'>
        <img src={config.urls.media + 'video_play.png'} className='video_play media' />
        <video className='media-vid'
          src={config.urls.gallery + i.name}
        />
      </div>)
    } else {
      if (i.name.indexOf('mp3') !== -1) { src = config.urls.media + 'audio_gallery.svg'; image = 'audio_gallery.svg' } else
      if (i.name.indexOf('pdf') !== -1) { src = config.urls.media + 'other_gallery.svg'; image = 'other_gallery.svg' } else
      if (i.name.split(/png|jpg|bmp|jpeg|gif|webp/i).pop() !== -1) { src = config.urls.gallery + i.name; image = 'image_gallery.svg' }
      return <div className='photo-wrap'>
        <img className='media-img'
          src={src} onError={e => { this.onError(e, image) }} />
      </div>
    }
  }

  render () {
    return (
      <div id='gallery-timeline'>
        <div className='header'>
          <div className='labels'>
            <img className='img-gallery' src={this.fileIcon(this.props.i.name)} />
            <span className='file-name'>{this.props.i.name}</span>
          </div>
          <div className='share-wrap'>
            <Share {...this.props} opt={{
              title: config.translations.share_title,
              text: config.translations.share_text,
              url: config.urls.gallery_sharing_base_url + this.props.i.name
            }} />
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
        {/* <div className='photo-wrap'> */}
          {this.typeItem(this.props.i)}
          {/* <img src={config.urls.gallery + this.props.i.name} /> */}
        {/* </div> */}
        <div className={this.props.i.note ? 'note' : 'hidden'}>
          <div className='title'>
            <span>{`${config.translations.notes}`}</span>
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
      </div>
    )
  }
}
