import Share from '../share/share.jsx'
import './gallery.styl'

export default class Gallery extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='gallery-timeline'>
        <div className='header'>
          <div className='labels'>
            <div className='order-in'>{config.translations.photo_creted.replace('{time}', moment(this.props.i.date).format('HH:hh'))}</div>
            <div className='photo'>
              <div className='img-wrap'>
                <img src={config.urls.media + 'foto-icon.png'} />
              </div>
              <h1 className='photo-label'>{config.translations.photo}</h1>
            </div>
          </div>
          <div className='share-wrap'>
            <Share {...this.props} opt={{
              title: config.translations.share_title,
              text: config.translations.share_text,
              url: config.urls.gallery_sharing_base_url + this.props.i.name
            }} />
          </div>
        </div>
        <div className='photo-wrap'>
          <img src={config.urls.gallery + this.props.i.name} />
        </div>
        <h1 className={this.props.i.note ? 'note' : 'hidden'}>{this.props.i.note}</h1>
      </div>
    )
  }
}
