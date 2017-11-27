// import Home from './components/home/home.jsx'
// import Timeline from './components/timeline/timeline.jsx'
import lazy from './lazy.js'
import './main.styl'
const Timeline = lazy(() => import('./components/timeline/timeline.jsx').then(m => m.default))
const Home = lazy(() => import('./components/home/home.jsx').then(m => m.default))
const {BrowserRouter, Switch, Route} = ReactRouterDOM

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path={config.urls.home} component={Home} />
      <Route path={config.urls.timeline} component={Timeline} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'))
