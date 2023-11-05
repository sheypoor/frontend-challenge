import React, { Fragment, ReactNode } from 'react'
import styles from './Wizard.module.scss'
import { IWizardStep } from './types';
import { formStepType } from 'src/pages/CreateUser/constants/form-steps';
import { renderBulletStyle, renderLineStyle } from './config';

interface IWProps {
    children: ReactNode;
    steps: formStepType;
    currentStep: IWizardStep;
    completed?: boolean;
}
const Wizard: React.FC<IWProps> = ({ children, steps, currentStep, completed }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.entries(steps).map(([_, step]) =>
                    <Fragment key={step.index}>
                        <div className={styles.bulletWrapper}>
                            <div className={renderBulletStyle(step, currentStep, !!completed)}>
                                <span>{step.index}</span>
                            </div>
                            <span className={styles.bulletPoint}>{step.title}</span>
                        </div>
                        {Object.values(steps).at(-1)!.index !== step.index && <div className={renderLineStyle(step, currentStep)} />}
                    </Fragment>
                )}
            </div>
            <div className={styles.body}>{children}</div>
        </div>
    )
}

export default Wizard