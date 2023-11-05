import { useContext } from "react";
import { ICreateUserContextType } from "../context/types";
import { CreateUserContext } from "../context";

export const useCreateUserContext = (): ICreateUserContextType => {
    const context = useContext(CreateUserContext);

    if (!context) {
        throw new Error('You are out of this context universe!');
    }

    return context;
};