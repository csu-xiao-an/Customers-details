import mainRequestService from './request.service'

export const replaceService = async () => {
  const url = config.urls.main + config.urls.fill.replace('{client_id}', config.data.id)
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT'
  }
  return await mainRequestService(url, options)
}
