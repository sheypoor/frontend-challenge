import React, { ReactNode } from 'react'
import styles from './Wizard.module.scss'

interface IWProps {
    children: ReactNode;
    footer: ReactNode;
}
const Wizard: React.FC<IWProps> = ({ children, footer }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.bulletWrapper}>
                    <div className={styles.bullet}>1</div>
                    <span className={styles.bulletPoint}>Personal</span>
                </div>
                <div className={styles.line}/>
                <div className={styles.bulletWrapper}>
                    <div className={styles.bullet}>2</div>
                    <span className={styles.bulletPoint}>Work</span>
                </div>
            </div>
            <div className={styles.body}>{children}</div>
            <div className={styles.footer}>{footer}</div>
        </div>
    )
}

export default Wizard