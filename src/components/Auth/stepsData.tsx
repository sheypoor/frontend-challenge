import { FiCheck, FiUserPlus } from 'react-icons/fi'
import Step1 from './Step1'
import Step2 from './Step2'

export const stepsData = ({ register, control }) => ({
  step1: {
    button: 'مرحله بعد',
    icon: <FiUserPlus className="animate-vote" />,
    components: <Step1 register={register} />,
  },
  step2: {
    button: 'ثبت‌نام',
    icon: <FiCheck className="animate-vote" />,
    components: <Step2 register={register} control={control} />,
  },
})
