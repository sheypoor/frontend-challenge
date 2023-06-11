import React from 'react';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import TextField from '@/components/cubes/TextField';
import { FirstStepSigning } from '@/types/Signing';
import Button from '@/components/cubes/Button';
import { toast } from 'react-toastify';


interface Props {
  onNext: (data: FirstStepSigning) => void;
}

export default function SigningFirstStep({onNext}:Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStepSigning>();

  const onSubmit: SubmitHandler<FirstStepSigning> = (data) => {
    toast.success('first Step Data Added' ,{
      position: toast.POSITION.TOP_CENTER
    })
    onNext(data);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-lg font-bold'>First Step</h1>
      <form className='w-2/3' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center my-3'>
          <TextField
            name="name"
            label="Name"
            placeholder='please add your name.'
            register={register as UseFormRegister<FirstStepSigning>}
            rules={{ required: 'Name is required' }}
            error={errors.name}
            className='p-2 bg-zinc-100 rounded-md'
            labelClassName='text-sm mb-2'
            errorElementClassName='flex items-center p-2 bg-red-300 border border-red-700 rounded mt-3'
            errorMessageClassName="ml-2 text-sm"
          />
          <TextField
            name="age"
            label="Age"
            type="number"
            placeholder='please add your age.'
            register={register}
            rules={{ required: 'Age is required' }}
            error={errors.age}
            className='p-2 bg-zinc-100 rounded-md'
            labelClassName='text-sm mb-2'
            errorElementClassName='flex items-center p-2 bg-red-300 border border-red-700 rounded mt-3'
            errorMessageClassName="ml-2 text-sm"
          />
        </div>
        <button type='submit' className='p-2 bg-green-500 rounded w-full' >
            <p className='text-gray-700'>Next</p>
        </button>
      </form>
    </div>
  );
}
