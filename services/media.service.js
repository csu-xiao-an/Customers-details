import mainRequestService from './request.service'
const client = window._config

export const postService = async body => {
  const url = client.urls.main + '/customers-details/clients/' + client.data.id + '/media'
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return await mainRequestService(url, options)
}
export const replaceService = async (body, id) => {
  const url = client.urls.main + '/customers-details/clients/' + client.data.id + '/media/' + id
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
export const deleteService = async id => {
  const url = client.urls.main + '/customers-details/clients/' + client.data.id + '/media/' + id
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return await mainRequestService(url, options)
}
