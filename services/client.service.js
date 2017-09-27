import mainRequestService from './request.service'

export const replaceService = async body => {
  const url = config.urls.main + '/customers-details/clients/' + config.data.id
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method: 'PATCH',
    body
  }
  return await mainRequestService(url, options)
}

export const getService = async q => {
  const url = config.urls.main + '/add-client/clients?q=' + q
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return await mainRequestService(url, options)
}
