import SocialNetwork from '../social-network/social-network.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import Events from '../events/events.jsx'
import Source from '../source/source.jsx'
import Groups from '../groups/groups.jsx'
import Adress from '../adress/adress.jsx'
import Email from '../email/email.jsx'
import Media from '../media/media.jsx'
import Notes from '../notes/notes.jsx'
import Debts from '../debts/debts.jsx'
import Sex from '../sex/sex.jsx'
import './hidden-fields.styl'

export default class HiddenFields extends React.Component {
  state = {
    isVisibleFields: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  render () {
    return this.props.rights.more_fields.isVisible && (
      <div id='hidden-fields'>
        <div className={this.state.isVisibleFields ? 'hidden' : 'main-button'}>
          <button onClick={() => this.setState({isVisibleFields: true})}>{config.translations.show_more_fields.toUpperCase()}</button>
        </div>
        {this.state.isVisibleFields &&
          <div className=''>
            {!config.data.recent_appoinments && <Events {...this.props} />}
            {!config.data.email && <Email {...this.props} />}
            {!config.data.adress && <Adress {...this.props} />}
            {!config.data.debts && <Debts {...this.props} />}
            {!config.data.notes && <Notes {...this.props} />}
            {!config.data.gallery && <Media {...this.props} />}
            {!config.data.source && <Source {...this.props} />}
            {!config.data.soc_media && <SocialNetwork {...this.props} />}
            {!config.data.groups && <Groups {...this.props} />}
            {!config.data.gender && <Sex {...this.props} />}
            {!config.data.birthdate && <Birthdate {...this.props} />}
          </div>}
          <div className='del-btn'>
              <button onClick={/*() => this.setState({isVisibleFields: true})*/''}>{config.translations.delete_customer.toUpperCase()}</button>
          </div>
      </div>
    )
  }
}
