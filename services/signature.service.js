import mainRequestService from './request.service'

export const replaceService = async body => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id + '/sinature'
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PUT',
    body
  }
  return await mainRequestService(url, options)
}
export const deleteService = async () => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id + '/sinature'
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return await mainRequestService(url, options)
}
