import { NEWSLETTER_PERIODS } from '~~/constants/newsletter'
export type newsletterPeriod = (typeof NEWSLETTER_PERIODS)[number]
export interface newsletterRegisterForm {
  name: string
  age: number
  email: string
  newsletter: newsletterPeriod
}
