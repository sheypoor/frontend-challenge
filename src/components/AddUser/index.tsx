import { yupResolver } from "@hookform/resolvers/yup";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { User, UserResponse, createUser } from "sdk";
import * as yup from "yup";
import { NextIcon, PlusIcon } from "../Icons";
import { PrevIcon } from "../Icons/index";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

export interface DialogHandler {
  toggle: VoidFunction;
}

interface AddUserProps {
  onSubmit: (data: UserResponse) => void;
}

const schema: yup.ObjectSchema<User> = yup.object({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  newsletter: yup.string<"daily" | "weekly" | "monthly">().required(),
  email: yup.string().email().required(),
});

export type FormData = yup.InferType<typeof schema>;

const AddUser = forwardRef<DialogHandler, AddUserProps>(function AddUser(
  { onSubmit },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm({
    progressive: true,
    mode: "all",
    resolver: yupResolver(schema),
  });

  const {
    getValues,
    reset,

    formState: { errors, touchedFields },
  } = methods;

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle() {
          dialogRef?.current?.open
            ? dialogRef?.current?.close()
            : dialogRef?.current?.showModal();
        },
      };
    },
    []
  );

  const handleCloseModal = () => {
    dialogRef?.current?.close();
    reset();
  };

  const handleChangeStep = async () => {
    if (
      step === 0 &&
      touchedFields.name &&
      touchedFields.age &&
      !errors.age &&
      !errors.name
    ) {
      setStep(1);
      return;
    }
    if (
      step === 1 &&
      touchedFields.email &&
      touchedFields.newsletter &&
      !Object.keys(errors).length
    ) {
      setLoading(true);
      const data = await createUser(getValues());
      onSubmit?.(data);
      setLoading(false);
      reset();
      setStep(0);
    }
  };

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box">
        <h3 className="text-lg font-bold">Add new user</h3>
        <div className="modal-middle mt-6">
          <FormProvider {...methods}>
            <form onSubmit={(e) => e.preventDefault()}>
              <StepOne hide={step === 0} />
              <StepTwo hide={step === 1} />
              <div className="modal-action">
                {step === 1 && (
                  <button
                    onClick={() => setStep(0)}
                    type="button"
                    className="btn btn-success"
                  >
                    <PrevIcon /> prev
                  </button>
                )}
                {loading ? (
                  <button className="btn btn-square">
                    <span className="loading loading-spinner"></span>
                  </button>
                ) : (
                  <button
                    onClick={handleChangeStep}
                    type="button"
                    className="btn btn-success"
                  >
                    {step === 1 ? (
                      <>
                        Submit <PlusIcon />
                      </>
                    ) : (
                      <>
                        Next <NextIcon />
                      </>
                    )}
                  </button>
                )}
                <button
                  type="button"
                  className="btn"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </dialog>
  );
});

export default AddUser;
