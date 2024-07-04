import {WuSpinner} from '@/components/spinner'
import {cn} from '@/lib/utils'
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
  floating?: boolean
  actionBtn?: boolean
}
export const WuButton: React.FC<IWuButtonProps> = ({
  disabled,
  loading,
  variant = EWuButtonVariant.PRIMARY,
  size = EWuButtonSize.MD,
  icon,
  iconPosition = EWuButtonIconPosition.LEFT,
  children,
  floating,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={disabled || loading}
      variant={variant}
      size={size}
      className={cn(
        floating && 'shadow-xl',
        'flex items-center justify-center gap-2',
        iconPosition === EWuButtonIconPosition.RIGHT && 'flex-row-reverse',
        className,
      )}
    >
      {icon && <div>{icon}</div>}

      {loading && <WuSpinner />}
      {!loading && children}
    </Button>
  )
}
