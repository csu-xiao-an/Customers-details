import './menu.styl'

export default class Menu extends React.Component {
  static propTypes = {
    closeMenu: PropTypes.func.isRequired
  }
  render () {
    return (
      <div id='menu_modal' onClick={this.props.closeMenu}>
        <div className='menu_wrap'>
          <div className='menu'>
            <figure className='menu-logo'>
              <img src={config.user.business_logo} alt='Logo' />
              <figcaption>{config.user.business_name}</figcaption>
            </figure>
            <nav className='menu-list'>
              {config.menu.map(item => {
                return (
                  <li className='list-item'>
                    <a className='item-link' href={item.link}>
                      <img className='menu-img' src={config.urls.menu_icons + item.icon} alt={item.text} />
                      {config.translations.menu[item.text]}
                    </a>
                  </li>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
