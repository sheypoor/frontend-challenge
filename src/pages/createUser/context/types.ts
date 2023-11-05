import { Dispatch, ReactNode, SetStateAction } from "react";
import { FORM_STEP, NEWS_LETTER } from "./enums";

export interface ICreateUserContextType {
    formStep: FORM_STEP;
    firstStepData: IFData | undefined;
    setFirstStepData: Dispatch<SetStateAction<IFData | undefined>>;
    setFormStep: Dispatch<SetStateAction<FORM_STEP>>;
}

export interface IPProps {
    children: ReactNode;
}

export interface IFData {
    name: string;
    age: number;
}

export interface ISData {
    email: string;
    newsletter: NEWS_LETTER
}