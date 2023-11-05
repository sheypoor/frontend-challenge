import { IWizardStep } from "./types"
import styles from './Wizard.module.scss'

export const renderBulletStyle = (step: IWizardStep, currentStep: IWizardStep, completed: boolean) => {
    if(currentStep?.index > step.index) return styles.completeBullet
    else if(currentStep?.index === step.index) 
        if(completed) return styles.completeBullet
        else return styles.activeBullet
    else return styles.bullet
}

export const renderLineStyle = (step: IWizardStep, currentStep: IWizardStep) => {
    if(currentStep?.index > step.index) return styles.activeLine
    else return styles.line
}