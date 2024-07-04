import {Meta, StoryObj} from '@storybook/react'
import React from 'react'
import {WuTooltip} from './WuTooltip'

const meta: Meta<typeof WuTooltip> = {
  component: WuTooltip,
}

export default meta
type IStory = StoryObj<typeof meta>

const options: Partial<IStory> = {
  args: {},
}
export const Default: IStory = {
  ...options,
  render: () => {
    return (
      <div>
        <WuTooltip content="This is a tooltip">
          <button>button</button>
        </WuTooltip>
      </div>
    )
  },
}
