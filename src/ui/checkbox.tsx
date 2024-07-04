import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check, Minus} from 'lucide-react'
import * as React from 'react'

import {cn} from '@/lib/utils'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    partial?: boolean
  }
>(({className, partial, ...props}, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'h-4 w-4 shrink-0 rounded border border-p-gray-500 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-p-blue-400 data-[state=checked]:text-white data-[state=checked]:border-none data-[state=checked]:hover:bg-p-blue-300 hover:bg-p-gray-100 hover:border-p-blue-400 transition-all',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      {!partial && <Check className="w-4 h-4" stroke="#fff" />}
      {partial && <Minus className="w-4 h-4" stroke="#fff" />}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox}
