import {detailsReplaceService} from 'project-services'
import './agreement.styl'

export default class Agreement extends React.Component {
  // static propTypes = {
  //   rights: PropTypes.object.isRequired
  // }
  // submit = () =>
  //   detailsReplaceService().then(r => {
  //     if (r.status === 204) {
  //       config.data.details_link_active = true
  //       this.forceUpdate()
  //     }
  //   })
  render () {
    return (
      <div id='agreement'>
            <img src='./dist/media/ic_check_box.svg'/>
      </div>
    )
  }
}
