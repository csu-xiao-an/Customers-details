import mainRequestService from './request.service'
export default (f, d) => f.map(i => mainRequestService(config.urls.main + config.urls.timeline_events.replace('{event}', i).replace('{ds}', d.s)
  .replace('{de}', d.e), {mode: 'cors', method: 'GET'}).then(r => r.json().then(r => r)))
