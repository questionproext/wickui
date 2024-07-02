import type {Meta, StoryObj} from '@storybook/react'

import {WuSpinner} from './WuSpinner'
import {WuSpinnerSizeEnum} from './types/WuSpinnerSizeEnum'

const meta = {
  component: WuSpinner,
} satisfies Meta<typeof WuSpinner>

export default meta

type Story = StoryObj<typeof meta>

const options: Partial<Story> = {
  args: {
    ariaLabel: 'loading',
    className: '',
    size: WuSpinnerSizeEnum.MEDIUM,
    message: '',
    color: '#000',
  },
  argTypes: {
    ariaLabel: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    size: {
      options: [
        WuSpinnerSizeEnum.SMALL,
        WuSpinnerSizeEnum.MEDIUM,
        WuSpinnerSizeEnum.LARGE,
      ],
      control: {type: 'radio'},
      type: 'string',
    },
  },
}
export const Default: Story = {
  ...options,
}
