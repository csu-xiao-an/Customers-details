import * as en from './languages/en.json'

const languageList = {
  en
}
const Language = lang => languageList[lang] || {}

export default Language
