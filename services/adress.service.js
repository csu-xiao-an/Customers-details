import mainRequestService from './request.service'

const getService = async q => {
  const url = config.urls.adress + '?address=' + q + '&language=' + config.translations.language
  const options = {
    mode: 'cors',
    method: 'GET'
  }
  return await mainRequestService(url, options)
}

export default getService
