import Request from '~~/api/http/request'
import type { newsletterRegisterForm } from '~~/types/newsletter.type'
import type { RequestType } from '~~/types/api.type'
import { createUser } from 'sdk'

class newsletterModule extends Request<RequestType> {
  // this module endpoint
  private RESOURCE = '/newsletter'

  async registerUserOnNewsletter(payload: newsletterRegisterForm) {
    /* 
      if we have a real REST API we can make an api call with below line !
      // return this.call('POST', this.RESOURCE, payload, options)
    */
    return createUser(payload)
  }
}

export default newsletterModule
