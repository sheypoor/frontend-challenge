import React, { Fragment, ReactNode } from 'react'
import styles from './Wizard.module.scss'
import { IWizardStep } from './types';
import { formStepType } from 'src/pages/CreateUser/constants/form-steps';

interface IWProps {
    children: ReactNode;
    steps: formStepType;
    currentStep: IWizardStep
}

const Wizard: React.FC<IWProps> = ({ children, steps, currentStep }) => {

    const renderBulletStyle = (step: IWizardStep) => {
        if(currentStep?.index > step.index) {
            return {backgroundColor: '#007629'}
        }else if(currentStep?.index === step.index) {
            return {backgroundColor: '#5a5500'}
        }else{
            return {}
        }
    }

    const renderLineStyle = (step: IWizardStep) => {
        if(currentStep?.index > step.index) {
            return {backgroundColor: '#007629'}
        }else{
            return {}
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.entries(steps).map(([_, step]) =>
                    <Fragment key={step.index}>
                        <div className={styles.bulletWrapper}>
                            <div className={styles.bullet} style={renderBulletStyle(step)}>{step.index}</div>
                            <span className={styles.bulletPoint}>{step.title}</span>
                        </div>
                        {Object.values(steps).at(-1)!.index !== step.index && <div className={styles.line} style={renderLineStyle(step)}/>}
                    </Fragment>
                )}
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    )
}

export default Wizard