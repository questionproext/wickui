import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui/tooltip'
import {Arrow} from '@radix-ui/react-tooltip'
import React from 'react'

export interface IWuTooltipProps extends React.HTMLAttributes<HTMLBaseElement> {
  content: string
}

export const WuTooltip: React.FC<IWuTooltipProps> = props => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>
        <TooltipContent>
          {props.content}
          <Arrow className="fill-tooltip"></Arrow>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
