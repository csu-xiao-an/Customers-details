import lazy from './lazy.js'
import './main.styl'
const ColorsBeautech = lazy(() => import('./components/colors-beautech/colors-beautech.jsx').then(r => r.default))
const ColorsBeautechOld = lazy(() => import('./components/colors-beautech-old/colors-beautech-old.jsx').then(r => r.default))
const PunchCardsAdd = lazy(() => import('./components/punch-cards-add/punch-cards-add.jsx').then(r => r.default))
const PunchCards = lazy(() => import('./components/punch-cards/punch-cards.jsx').then(r => r.default))
const Timeline = lazy(() => import('./components/timeline/timeline.jsx').then(r => r.default))
const Home = lazy(() => import('./components/home/home.jsx').then(r => r.default))
const {BrowserRouter, Switch, Route, Redirect} = ReactRouterDOM

const isPunchCards = config.plugins_list.includes('punch_cards')
const isColorsBeautech = config.plugins_list.includes('colors_beautech')
const baseUrl = config.baseUrl ? config.baseUrl.replace('{client_id}', config.data.id) : ''

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {isPunchCards && <Route path={baseUrl + config.urls.punch_cards_adding} component={PunchCardsAdd} />}
      {isColorsBeautech && <Route path={baseUrl + config.urls.colors_beautech} component={ColorsBeautech} />}
      {isColorsBeautech && <Route path={baseUrl + config.urls.colors_beautech_old} component={ColorsBeautechOld} />}
      {isPunchCards && <Route path={baseUrl + config.urls.punch_cards} component={PunchCards} />}
      <Route path={baseUrl + config.urls.timeline} component={Timeline} />
      <Route exact path={baseUrl + config.urls.home} component={Home} />
      <Redirect from='/' to={baseUrl} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
