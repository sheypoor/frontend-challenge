import { FetchOptions } from 'ofetch'
import type { AsyncDataOptions } from 'ofetch'
import Request from '../http/request'
import type { newsletterRegisterForm } from '~~/types/newsletter'
import { createUser } from '../../../sdk'

class newsletterModule extends Request {
  // this module endpoint
  private RESOURCE = '/newsletter'

  /**
   * Return the New user as object
   * @param asyncDataOptions options for `useAsyncData`
   * @returns
   */
  async registerUserOnNewsletter(
    payload: newsletterRegisterForm,
    options: AsyncDataOptions, // use for api call
  ) {
    /* 
      if we have a real REST API we can make an api call with below line !
      // return this.call('POST', this.RESOURCE, payload, options)
    */
    return createUser(payload)
  }
}

export default newsletterModule
