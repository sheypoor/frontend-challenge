import { IWizardStep } from "src/components/app/Wizard/types";
import { FORM_STEP } from "../context/enums";

export type formStepType = Record<FORM_STEP, IWizardStep>

export const formSteps: formStepType = {
    [FORM_STEP.FIRST_STEP]: {
        title: 'First',
        index: 1,
    },
    [FORM_STEP.SECOND_STEP]: {
        title: 'Second',
        index: 2,
    }
}