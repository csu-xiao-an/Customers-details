import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.media_url.replace('{client_id}', config.data.id)

export const postService = async body => {
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return await mainRequestService(mainUrl, options)
}

export const replaceService = async (body, id) => {
  const url = mainUrl + '/' + id
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
  const url = mainUrl + '/' + id
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return await mainRequestService(url, options)
}
