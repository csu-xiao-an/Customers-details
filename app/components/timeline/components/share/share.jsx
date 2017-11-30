import Dialog from 'share-dialog'
import './share.styl'

export default class Share extends React.Component {
  state = {
    isVisibleIcons: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired,
    opt: PropTypes.object.isRequired
  }
  share = () => {
    if (navigator.share) {
      navigator.share(this.props.opt)
    // .then(() => console.log('Successful share'))
    // .catch(er => console.log('Error sharing', er))
    } else {
      this.setState({isVisibleIcons: !this.state.isVisibleIcons})
    }
  }
  render () {
    return this.props.rights.timeline.share && (
      <div id='share'>
        <img className='share' src={config.urls.media + 'share.png'} onClick={this.share} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible facebook' : '')} src={config.urls.soc_net + 'facebook.png'}
          onClick={() => Dialog.facebook(this.props.opt.url).open()} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible twitter' : '')} src={config.urls.soc_net + 'twitter.png'}
          onClick={() => Dialog.twitter(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible pingterest' : '')} src={config.urls.soc_net + 'pinterest.png'}
          onClick={() => Dialog.pinterest(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible gplus' : '')} src={config.urls.soc_net + 'google.png'}
          onClick={() => Dialog.gplus(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()} />
        <img className={'icon-default ' + (this.state.isVisibleIcons ? 'isVisible linkedin' : '')} src={config.urls.soc_net + 'linkedin.png'}
          onClick={() => Dialog.linkedIn(this.props.opt.url, this.props.opt.title, this.props.opt.text).open()} />
      </div>
    )
  }
}
