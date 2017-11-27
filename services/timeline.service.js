import mainRequestService from './request.service'

export default () => {
  const url = config.urls.main + '/clients/123123/appoinments'
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return mainRequestService(url, options)
}
