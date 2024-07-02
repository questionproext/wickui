import {Button} from '../../ui/button'
import {WuSpinner} from '../spinner'
import {WuButtonSizeEnum} from './types/WuButtonSizeEnum'
import {WuButtonVariantEnum} from './types/WuButtonVariantEnum'
export interface IWuButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  loading?: boolean
  variant?: WuButtonVariantEnum
  size?: WuButtonSizeEnum
}
export const WuButton: React.FC<IWuButtonProps> = ({
  disabled,
  loading,
  variant = WuButtonVariantEnum.PRIMARY,
  size = WuButtonSizeEnum.MD,
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
      {loading && <WuSpinner />}
      {!loading && children}
    </Button>
  )
}
