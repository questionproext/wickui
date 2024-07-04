import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p-blue-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 leading-4',
  {
    variants: {
      size: {
        md: 'px-6 py-2',
        sm: 'text-xs px-4 py-1',
        lg: 'text-lg px-8 py-2',
      },
      variant: {
        primary: 'bg-p-blue-400 text-white hover:bg-p-blue-300',
        outline:
          'border border-p-blue-400 text-p-blue-400 hover:bg-p-blue-400 hover:text-white',
        secondary:
          'text-p-blue-400 hover:bg-secondary/80 hover:text-q-blue-500',
        link: 'text-p-blue-400 underline-offset-4 hover:underline',
        rounded: 'bg-p-blue-400 text-white hover:bg-p-blue-300 rounded-full',
        'icon-only':
          'rounded p-2 aspect-square bg-p-blue-400 hover:bg-p-blue-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({size, variant, className}))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export {Button}
