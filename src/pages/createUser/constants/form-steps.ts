import { IWizardStep } from "src/components/app/Wizard/types";

export type formStepType = Record<string, IWizardStep>

export const formSteps: formStepType = {
    FIRST_STEP: {
        title: 'Personal',
        index: 1,
    },
    SECOND_STEP: {
        title: 'Work',
        index: 2,
    }
}