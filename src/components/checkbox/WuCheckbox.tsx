import {Checkbox} from '@/ui/checkbox'
import {cva} from 'class-variance-authority'
import React from 'react'

export interface IWuCheckboxProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  checked?: boolean
  label?: string
  labelPosition?: 'left' | 'right'
  partial?: boolean
}

export const WuCheckbox: React.FC<IWuCheckboxProps> = props => {
  const {
    disabled,
    checked,
    label,
    labelPosition = 'left',
    className,
    id,
    partial,
    ...restProps
  } = props

  return (
    <label
      htmlFor={id}
      className={labelPositionClasses({labelPosition, className})}
    >
      {label && <span>{label}</span>}
      <Checkbox
        partial={partial}
        id={id}
        {...restProps}
        checked={checked}
        disabled={disabled}
      />
    </label>
  )
}

const labelPositionClasses = cva('flex items-center gap-2 w-fit text-inherit', {
  variants: {
    labelPosition: {
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
  },
})
