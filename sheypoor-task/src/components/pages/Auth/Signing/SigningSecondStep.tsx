import React from 'react';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import TextField from '@/components/cubes/TextField';
import { SecondStepSigning } from '@/types/Signing';
import Button from '@/components/cubes/Button';



interface Props {
  onBack: () => void;
  onSubmit: (data: SecondStepSigning) => void;
}

const selectMockUp =  [
  {
    value: 'daily',
    text : 'Daily'
  },
  {
    value: 'weekly',
    text : 'Weekly'
  },
  {
    value: 'monthly',
    text : 'Monthly'
  },

]

export default function SigningSecondStep({onBack , onSubmit} : Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecondStepSigning>();

  const handlePrevious = () => {
    onBack();
  };

  const handleFormSubmit: SubmitHandler<SecondStepSigning> = (data) => {
    onSubmit(data);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='text-lg font-bold'>Second Step</h1>
      <form className='w-2/3' onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder='please add your email.'
          register={register as UseFormRegister<SecondStepSigning>}
          rules={{ required: 'Email is required' }}
          error={errors.email}
          className='p-2 bg-zinc-100 rounded-md'
          labelClassName='text-sm mb-2'
          errorElementClassName='flex items-center p-2 bg-red-300 border border-red-700 rounded mt-3'
          errorMessageClassName="ml-2 text-sm"
        />
        <TextField
          name="newsletter"
          label="Newsletter"
          as="select"
          defaultValue="daily"
          register={register}
          className='p-2 bg-zinc-100 rounded-md'
          labelClassName='text-sm mb-2'
          errorElementClassName='flex items-center p-2 bg-red-300 border border-red-700 rounded mt-3'
          errorMessageClassName="ml-2 text-sm"
        >
          {selectMockUp.map((option : {value : string , text : string}) => {
            return <option value={option.value}>{option.text}</option>
          })}
        </TextField>
        <div className='flex gap-0 mt-3 justify-between'>
          <Button className='w-1/4 border border-red-400 rounded text-sm' onClick={handlePrevious}>
            <p className='text-gray-500'>
                back
            </p>
          </Button>
          <Button className='w-2/3 p-2 bg-green-500 rounded text-sm' type="submit">
            <p className='text-gray-700'>
              Create Account
            </p>
          </Button>
        </div>
     
      </form>
    </div>
  );
}
