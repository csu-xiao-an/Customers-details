import mainRequestService from './request.service'

const mainUrl = config.urls.main + config.urls.signature.replace('{client_id}', config.data.id)

export const replaceService = async body => {
  const options = {
    mode: 'cors',
    method: 'POST',
    body
  }
  return await mainRequestService(mainUrl, options)
}

export const deleteService = async () => {
  const options = {
    mode: 'cors',
    method: 'DELETE'
  }
  return await mainRequestService(mainUrl, options)
}
