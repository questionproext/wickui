import React from 'react'
import styles from './WuToast.module.css'

export interface IWuToastProps extends React.HTMLAttributes<HTMLBaseElement> {}

export const WuToast: React.FC<IWuToastProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Toast</h1>
    </div>
  )
}
