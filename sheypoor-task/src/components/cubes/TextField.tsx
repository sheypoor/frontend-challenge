import React from 'react';
import clsx from 'clsx';
import { UseFormRegister } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface Props {
  name: string;
  label: string;
  placeholder ?: string;
  register: UseFormRegister<any>;
  rules?: Record<string, any>;
  error?: any;
  as?: 'input' | 'select' | 'textarea';
  className : string;
  labelClassName : string;
  errorElementClassName : string;
  errorMessageClassName : string;
  [key: string]: any;
}


export default function TextField({
  name,
  label,
  register,
  rules,
  error,
  as = 'input',
  className,
  labelClassName,
  errorElementClassName,
  errorMessageClassName,
  placeholder,
  ...rest
}: Props) {
  const componentClassName =clsx('text-sm text-gray-800' , className) 
  
  return (
    <div className='flex flex-col mt-2'>
      <label className={labelClassName} htmlFor={name}>{label}</label>
      {as === 'select' ? (
        <select 
          className={className}  
          id={name} 
          {...register(name, rules)} 
          {...rest} />
      ) 
      : as === 'textarea' ? (
        <textarea 
          className={className} 
          placeholder={placeholder} 
          id={name} 
          {...register(name, rules)} 
          {...rest} />
      ) 
      : (
        <input 
          className={componentClassName} 
          placeholder={placeholder} 
          id={name} 
          {...register(name, rules)} 
          {...rest} />
      )}
      {error && 
        <ErrorMessage 
          errorElementClassName={errorElementClassName} 
          errorMessageClassName={errorMessageClassName} 
          message={error.message} />
      }
    </div>
  );
}
