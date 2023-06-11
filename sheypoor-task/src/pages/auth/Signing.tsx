import React, { useState } from 'react';
import Image from 'next/image';
import SigningFirstStep from '@/components/pages/Auth/Signing/SigningFirstStep';
import SigningSecondStep from '@/components/pages/Auth/Signing/SigningSecondStep';
import { FirstStepSigning, SecondStepSigning } from '@/types/Signing';
import { createUser } from 'sdk'
import mobileLogin from 'assets/gifs/MobileLogin.gif'
import clsx from 'clsx';
import { toast } from 'react-toastify';

const Signing = () => {
    const [isFirstStep , setIsFirstStep] = useState<Boolean>(true);
    const [formData, setFormData] = useState({});
  
    const handleNext = (data: FirstStepSigning) => {
      setFormData((prevData) => ({ ...prevData, ...data }));
      setIsFirstStep(false);
    };
  
    const handleBack = () => {
        setIsFirstStep(true);
    };
  
    const handleSubmit = (data: SecondStepSigning) => {
      const completeFormData = { ...formData, ...data };
      createUser(completeFormData)
      .then((res) => {
        toast.success('token added' ,{
            position: toast.POSITION.TOP_CENTER
        })
        console.log(res);
      })
      .catch((err) => {
        toast.error('token not added' ,{
            position: toast.POSITION.TOP_CENTER
        } )
        console.log(err);
      })
    };
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex sm:flex-row justify-between sm:w-2/3 sm:h-1/2 h-full shadow-md flex-col-reverse w-full'>
                <div className={clsx('sm:w-1/2 h-1/2 sm:h-full transition-all duration-150 w-full' , { 'transition-all duration-150 sm:translate-x-full' :!isFirstStep})}>
                    {isFirstStep 
                        ? <SigningFirstStep onNext={handleNext} />  
                        : <SigningSecondStep onBack={handleBack} onSubmit={handleSubmit} />}
                </div>
                <Image className={clsx('sm:w-1/2 h-1/2 sm:h-full transition-all duration-150 translate-x-0' , {'transition-all duration-150 sm:-translate-x-full' : !isFirstStep})}  src={mobileLogin} alt='mobile-login-vector'/>
            </div>
        </div>
    );
   
};

export default Signing;