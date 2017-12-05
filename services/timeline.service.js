import mainRequestService from './request.service'

const appointments = d => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/appointments?start=' + d.s + '&end=' + d.e
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => r))
}
const gallery = d => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/gallery?start=' + d.s + '&end=' + d.e
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => r))
}
const dept = d => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/depts?start=' + d.s + '&end=' + d.e
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => r))
}
const note = d => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/notes?start=' + d.s + '&end=' + d.e
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => r))
}
const sms = d => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/sms?start=' + d.s + '&end=' + d.e
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options).then(r => r.json().then(r => r))
}
export default (f, d) => {
  let array = []
  f.some(i => i === 'appointments') && array.push(appointments(d))
  f.some(i => i === 'gallery') && array.push(gallery(d))
  f.some(i => i === 'dept') && array.push(dept(d))
  f.some(i => i === 'note') && array.push(note(d))
  f.some(i => i === 'sms') && array.push(sms(d))
  return array
}
