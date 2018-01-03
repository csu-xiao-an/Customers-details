import lazy from './lazy.js'
import './main.styl'
const ColorsBeautech = lazy(() => import('./components/colors-beautech/colors-beautech.jsx').then(m => m.default))
const PunchCardsAdd = lazy(() => import('./components/punch-cards-add/punch-cards-add.jsx').then(m => m.default))
const PunchCards = lazy(() => import('./components/punch-cards/punch-cards.jsx').then(m => m.default))
const Timeline = lazy(() => import('./components/timeline/timeline.jsx').then(m => m.default))
const Home = lazy(() => import('./components/home/home.jsx').then(m => m.default))
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
