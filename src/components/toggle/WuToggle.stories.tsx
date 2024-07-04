import {Meta, StoryObj} from '@storybook/react'
import {WuToggle} from './WuToggle'

const meta: Meta<typeof WuToggle> = {
  component: WuToggle,
}

export default meta
type IStory = StoryObj<typeof meta>

const options: Partial<IStory> = {
  args: {
    label: 'Toggle',
    labelPosition: 'left',
  },
}
export const Default: IStory = {
  ...options,
}
