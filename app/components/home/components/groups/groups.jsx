import {Swiper} from 'project-components'
import Line from '../line/line.jsx'
import './groups.styl'

export default class Groups extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  componentWillMount = () => { if (!Array.isArray(config.data.groups)) config.data.groups = [] }
  render () {
    return (
      <div id={config.data.groups.length > 0 ? 'groups' : 'hidden'}>
        <div className='group-header'>
          <span className='groups-label'>{config.translations.groups}</span>
        </div>
        <div className='group-body'>
          <Swiper slidesPerView='auto'>
            {config.data.groups.map((i, k) => (
              <div key={k} className='group-wrap'>
                <a href={this.props.rights.groups.to_group ? config.urls.main + config.urls.groups + i.id : false}>
                  <div className='img'>
                    <img className='icon' src={config.urls.groups_img + i.image} />
                    <label className='amount'>{i.amount}</label>
                  </div>
                  <label className='name'>{i.name}</label>
                </a>
              </div>)
            )}
          </Swiper>
        </div>
        <div className='group-footer'>
          <label className='footer-label'>{config.translations.add_new_group}</label>
          <a className='href'
            href={''/* this.props.rights.events.cr_app ? config.urls.main + config.urls.appointment + '?client_id=' + config.data.id : false */}>
            <img className='add' src={config.urls.media + 'c_add_stroke.svg'} />
          </a>
        </div>
        {/* <Line /> */}
      </div>
    )
  }
}
