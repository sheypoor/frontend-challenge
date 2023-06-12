import React from 'react';

interface Props {
    errorElementClassName: string;
    errorMessageClassName?: string;
    message: string;
}

const ErrorMessage = ({errorElementClassName , errorMessageClassName , message} : Props) => {

    const errorBadgeClassName = 'block w-2 h-2 rounded-full bg-red-600'

    return (
    <div className={errorElementClassName}>
        <span className={errorBadgeClassName}/>
        <span className={errorMessageClassName}>{message}</span>
      </div> 
    );
};

export default ErrorMessage;