import {cva} from 'class-variance-authority'
import React from 'react'
import {Switch} from '../../ui/switch'

export interface IWuToggleProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  checked?: boolean
  label?: string
  labelPosition?: 'left' | 'right' | 'top'
}

export const WuToggle: React.FC<IWuToggleProps> = props => {
  const {
    disabled,
    checked,
    label,
    labelPosition = 'left',
    className,
    ...restProps
  } = props
  return (
    <label className={labelPositionClasses({labelPosition, className})}>
      <Switch {...restProps} checked={checked} disabled={disabled} />
      {label && <span>{label}</span>}
    </label>
  )
}

const labelPositionClasses = cva('flex items-center gap-2 w-fit text-inherit', {
  variants: {
    labelPosition: {
      left: 'flex-row',
      right: 'flex-row-reverse',
      top: 'flex-col-reverse items-baseline',
    },
  },
})
