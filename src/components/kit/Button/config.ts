import { BUTTON_CLASS_OPTIONS } from "./enums"
import styles from './index.module.scss'

export const buttonClassName = (type?: keyof typeof BUTTON_CLASS_OPTIONS) => {
    switch (type) {
        case BUTTON_CLASS_OPTIONS.INFO:
            return styles.button_info
        case BUTTON_CLASS_OPTIONS.SUCCESS:
            return styles.button_success
        default:
            return styles.button
    }
}