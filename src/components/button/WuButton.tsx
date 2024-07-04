import {WuSpinner} from '@/components/spinner'
import {Button} from '@/ui/button'
import {ReactNode} from 'react'
import {EWuButtonIconPosition} from './types/EWuButtonIconPosition'
import {EWuButtonSize} from './types/EWuButtonSize'
import {EWuButtonVariant} from './types/EWuButtonVariant'

export interface IWuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  variant?: EWuButtonVariant
  size?: EWuButtonSize
  icon?: ReactNode
  iconPosition?: EWuButtonIconPosition
}
export const WuButton: React.FC<IWuButtonProps> = ({
  disabled,
  loading,
  variant = EWuButtonVariant.PRIMARY,
  size = EWuButtonSize.MD,
  icon,
  iconPosition = EWuButtonIconPosition.LEFT,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={disabled || loading}
      variant={variant}
      size={size}
    >
      {icon && iconPosition === EWuButtonIconPosition.LEFT && (
        <div className="mr-2">{icon}</div>
      )}
      {loading && <WuSpinner />}
      {!loading && children}
      {icon && iconPosition === EWuButtonIconPosition.RIGHT && (
        <div className="ml-2">{icon}</div>
      )}
    </Button>
  )
}
