import React from 'react'
import {cn} from '../../lib/utils'
import styles from './WuSpinner.module.css'
import {WuSpinnerSizeEnum} from './types/WuSpinnerSizeEnum'

export interface IWuSpinnerProps {
  size?: WuSpinnerSizeEnum | string
  className?: string
  style?: React.CSSProperties
  color?: string
  ariaLabel?: string
  message?: string
}

export const WuSpinner: React.FC<IWuSpinnerProps> = ({
  size,
  className,
  style,
  color,
  ariaLabel = 'Loading',
  message,
}) => {
  const spinnerClasses = cn(styles.spinner, className)

  let sizeInPx = '7px'
  if (size === WuSpinnerSizeEnum.SMALL) {
    sizeInPx = '7px'
  } else if (size === WuSpinnerSizeEnum.MEDIUM) {
    sizeInPx = '12px'
  } else if (size === WuSpinnerSizeEnum.LARGE) {
    sizeInPx = '18px'
  } else if (typeof size === 'string') {
    sizeInPx = size
  }

  const parentStyle = {
    fontSize: sizeInPx,
  }

  const childStyle = color ? {backgroundColor: color} : {}

  return (
    <>
      <div
        className={spinnerClasses}
        style={{...parentStyle, ...style}}
        aria-label={ariaLabel}
        role="spinner"
      >
        <span className={styles.dot} style={{...childStyle}}></span>
        <span className={styles.dot} style={{...childStyle}}></span>
        <span className={styles.dot} style={{...childStyle}}></span>
        <span className={styles.dot} style={{...childStyle}}></span>
      </div>
      {message && <div className={styles.message}>{message}</div>}
    </>
  )
}
