import {Home} from 'lucide-react'
import {Button} from '../../ui/button'
import {WuSpinner} from '../spinner'
import {EWuButtonIconPosition} from './types/EWuButtonIconPosition'
import {EWuButtonSize} from './types/EWuButtonSize'
import {EWuButtonVariant} from './types/EWuButtonVariant'

export interface IWuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  variant?: EWuButtonVariant
  size?: EWuButtonSize
  icon?: string
  iconPosition?: EWuButtonIconPosition
}
export const WuButton: React.FC<IWuButtonProps> = ({
  disabled,
  loading,
  variant = EWuButtonVariant.PRIMARY,
  size = EWuButtonSize.MD,
  icon,
  iconPosition,
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
        <Home className="mr-2" size={16} strokeWidth={1.5} />
      )}
      {loading && <WuSpinner />}
      {!loading && children}
      {icon && iconPosition === EWuButtonIconPosition.RIGHT && (
        <Home className="ml-2" size={16} strokeWidth={1.5} />
      )}
    </Button>
  )
}
