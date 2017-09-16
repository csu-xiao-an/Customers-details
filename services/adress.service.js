import mainRequestService from './request.service'

export const getService = async query => {
  const url = config.urls.adress + '?address=' + query + '&language=' + config.translations.language
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return await mainRequestService(url, options)
}
