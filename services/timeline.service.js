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
  let data = []
  if (config.plugins_list.some(i => i === 'gallery') && f.gallery) data.push(gallery(d))
  if (config.plugins_list.some(i => i === 'depts') && f.dept) data.push(dept(d))
  if (f.appointment) data.push(appointments(d))
  if (f.other) data.push(note(d), sms(d))
  return data
}
