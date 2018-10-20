import Share from '../share/share.jsx'
import './gallery.styl'

export default class Gallery extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }

  state = {
    expand: false
  }

  render () {
    return (
      <div id='gallery-timeline'>
        <div className='header'>
          <div className='labels'>
            <img className='img-gallery' src={`${config.urls.media}ic-gallery.svg`} />
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
            <span>{moment(this.props.i.date).format('HH:hh')}</span>
          </div>
          <div className='create-date'>
            <img src={`${config.urls.media}ic-day.svg`} />
            <span>{moment(this.props.i.date).format('ddd, MMMM DD')}</span>
          </div>
        </div>
        <div className='photo-wrap'><img src={config.urls.gallery + '01.png'} /></div>
        {/* <div className='photo-wrap'><img src={config.urls.gallery + this.props.i.name} /></div> */}
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
