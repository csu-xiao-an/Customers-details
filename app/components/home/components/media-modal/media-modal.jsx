import {mediaReplaceService, mediaDeleteService} from 'project-services'
import {formatDate, Modal, Swiper} from 'project-components'
import './media-modal.styl'

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
  typeItem = (i, k) => {
    if (this.state.activeIndex === k || this.state.activeIndex === k + 1 || this.state.activeIndex === k - 1) {
      if (i.name.indexOf('png') !== -1) { return <img src={config.urls.gallery + i.name} /> } else
      if (i.name.indexOf('mp4') !== -1) { return <video src={config.urls.gallery + i.name} controls /> } else
      if (i.name.indexOf('mp3') !== -1) {
        return (<div>
          <img className='audio-img' src={config.urls.media + 'audio_file.png'} />
          <audio src={config.urls.gallery + i.name} controls />
        </div>)
      } else if (i.name.indexOf('pdf') !== -1) {
        return <iframe src='http://docs.google.com/gview?url=http://api.bewebmaster.co.il/public/creating_appointment.pdf&embedded=true' />
      }
    }
  }
  replace = id => {
    const body = `note=${this.state.textareaValue}`
    mediaReplaceService(body, id).then(r => {
      if (r.status === 204) {
        config.data.gallery[this.state.activeIndex].date = moment().format('YYYY-MM-DD HH:mm')
        config.data.gallery[this.state.activeIndex].note = this.state.textareaValue
        this.setState({isEditNote: false, textareaValue: ''})
      }
    })
  }
  delete = id => {
    mediaDeleteService(id).then(r => {
      if (r.status === 204) {
        config.data.gallery.splice(this.state.activeIndex, 1)
        this.props.handleGallery()
        this.setState({activeIndex: 0})
      }
    })
  }
  componentDidMount = () => {
    var divNode = document.createElement('div')
    var divNode2 = document.createElement('div')
    const url = `${config.urls.media}ic_left.svg`
    const url2 = `${config.urls.media}ic_right.svg`
    divNode.innerHTML = `<style>
    .swiper-button-prev:before{
      content: url(${url});
    }
    </style>`
    document.body.appendChild(divNode)
    divNode2.innerHTML = `<style>
    .swiper-button-next:before{
      content: url(${url2});
    }
    </style>`
    document.body.appendChild(divNode2)
  }
  render () {
    return (
      <Modal show={this.props.isOpenGallery}>
        <div className='modal-body'>
          <img className={'close-button'} src={config.urls.media + 'ic_close.svg'}
            onClick={() => { this.props.handleGallery(); this.setState({activeIndex: 0}) }} />
          <div className={this.state.isEditNote ? 'noSwiping' : ''}>
            <Swiper observer onSlideChangeStart={e => { e.container[0].childNodes[0].style.transitionDuration = '300ms' }}
              nextButton={config.isRtL ? '.swiper-button-prev-rtl' : '.swiper-button-next'}
              prevButton={config.isRtL ? '.swiper-button-next-rtl' : '.swiper-button-prev'}
              onSetTranslate={e => this.setState({activeIndex: e.activeIndex})}
              slidesPerView='auto' initialSlide={this.props.initialSlide}>
              {config.data.gallery.map((i, k) => (<div key={k} className='gallery-swiper-wrap'>{this.typeItem(i, k)}</div>))}
            </Swiper>
          </div>
        </div>
        <div className='modal-footer'>
          <div className='main'>
            <div className='row1'>
              <span className='name'>{config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].name}</span>
              <div className='icons'>
                <img src={config.urls.media + 'pencil.svg'} onClick={() => {
                  if (!this.state.isEditNote) this.setState({ isEditNote: !this.state.isEditNote, textareaValue: config.data.gallery[this.state.activeIndex].note })
                }} />
                <img src={config.urls.media + 'ic_delete.svg'} onClick={() => this.delete(config.data.gallery[this.state.activeIndex].id)} />
              </div>
            </div>
            <div className='row2'>
              <img className='icon' src={config.urls.media + 'ic_day.svg'} />
              <span className='date'>{config.data.gallery[this.state.activeIndex] && formatDate(config.data.gallery[this.state.activeIndex].date)}</span>
            </div>
          </div>
          <div className='data'>
            <span className={this.state.isEditNote ? 'hidden' : 'note'}>
              {config.data.gallery[this.state.activeIndex] && config.data.gallery[this.state.activeIndex].note}</span>
            <div className={this.state.isEditNote ? 'edit-form' : 'hidden'}>
              <textarea className={this.state.isEditNote ? 'textarea' : 'hidden'}
                onChange={e => this.setState({textareaValue: e.target.value})} value={this.state.textareaValue} />
              <div className='action'>
                <button className={this.state.isEditNote ? 'btn-save' : 'hidden'}
                  onClick={() => this.replace(config.data.gallery[this.state.activeIndex].id)}>
                  {config.translations.save}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}
