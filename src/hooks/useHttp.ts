import { $fetch, FetchOptions } from 'ofetch'
import api from '~~/config/api'

// modules
import newsletterModule from '~~/api/modules/newsletter'

interface IApiInstance {
  newsletter: newsletterModule
}

const useHttp = () => {
  const fetchOptions: FetchOptions = {
    baseURL: api.baseUrl,
  }

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions)

  // An object containing all modules we need to expose
  const modules: IApiInstance = {
    newsletter: new newsletterModule(apiFecther),
  }
  return modules
}

export default useHttp
