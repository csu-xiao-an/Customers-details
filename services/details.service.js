import mainRequestService from './request.service'

export const replaceService = async () => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id + '/' + config.urls.fill
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT'
  }
  return await mainRequestService(url, options)
}
