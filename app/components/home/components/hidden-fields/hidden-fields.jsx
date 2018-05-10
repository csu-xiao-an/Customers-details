import SocialNetwork from '../social-network/social-network.jsx'
import Birthdate from '../birthdate/birthdate.jsx'
import Events from '../events/events.jsx'
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
            {(!config.data.recent_appoinments || !config.data.recent_appoinments.length) && <Events {...this.props} />}
            {!config.data.email && <Email {...this.props} />}
            {!config.data.adress && <Adress {...this.props} />}
            {(!config.data.debts || !config.data.debts.length) && <Debts {...this.props} />}
            {(!config.data.notes || !config.data.notes.length) && <Notes {...this.props} />}
            {(!config.data.gallery || !config.data.gallery.length) && <Media {...this.props} />}
            {(!config.data.soc_media || !config.data.soc_media.length) && <SocialNetwork {...this.props} />}
            {(!config.data.groups || !config.data.groups.length) && <Groups {...this.props} />}
            {!config.data.gender && <Sex {...this.props} />}
            {(!config.data.birthdate || !config.data.birthyear) && <Birthdate {...this.props} />}
          </div>}
      </div>
    )
  }
}
