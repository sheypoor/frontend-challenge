import { createContext, useState } from 'react';
import { ICreateUserContextType, IFData, IPProps, ISData } from './types';
import { FORM_STEP } from './enums';

export const CreateUserContext = createContext<ICreateUserContextType>({} as ICreateUserContextType);
const CreateUserProvider: React.FC<IPProps> = ({ children }) => {
    const [formStep, setFormStep] = useState<FORM_STEP>(FORM_STEP.FIRST_STEP)
    const [firstStepData, setFirstStepData] = useState<IFData>()
    
    return (
        <CreateUserContext.Provider
            value={{
                formStep,
                firstStepData,
                setFormStep,
                setFirstStepData,
            }}
        >
            {children}
        </CreateUserContext.Provider>
    )
}

export default CreateUserProvider
