import lazy from './lazy.js'
import './main.styl'
const ColorsBeautech = lazy(() => import('./components/colors-beautech/colors-beautech.jsx').then(r => r.default))
const PunchCardsAdd = lazy(() => import('./components/punch-cards-add/punch-cards-add.jsx').then(r => r.default))
const PunchCards = lazy(() => import('./components/punch-cards/punch-cards.jsx').then(r => r.default))
const Timeline = lazy(() => import('./components/timeline/timeline.jsx').then(r => r.default))
const Home = lazy(() => import('./components/home/home.jsx').then(r => r.default))
const {BrowserRouter, Switch, Route} = ReactRouterDOM

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={config.urls.punch_cards_adding} component={PunchCardsAdd} />
      <Route path={config.urls.colors_beautech} component={ColorsBeautech} />
      <Route path={config.urls.punch_cards} component={PunchCards} />
      <Route path={config.urls.timeline} component={Timeline} />
      <Route exact path={config.urls.home} component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
