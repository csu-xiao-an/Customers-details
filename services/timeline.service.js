import mainRequestService from './request.service'

export const appointments = () => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/appointments?start=2017-01-01&end=2017-01-07'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
export const gallery = () => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/gallery?start=2017-01-01&end=2017-01-07'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
export const depts = () => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/depts?start=2017-01-01&end=2017-01-07'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
export const notes = () => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/notes?start=2017-01-01&end=2017-01-07'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
export const sms = () => {
  const url = config.urls.main + '/customers-details/clients/123/timeline/sms?start=2017-01-01&end=2017-01-07'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
