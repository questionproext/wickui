import {Meta, StoryObj} from '@storybook/react'
import {WuCheckbox} from './WuCheckbox'

const meta: Meta<typeof WuCheckbox> = {
  component: WuCheckbox,
}

export default meta
type IStory = StoryObj<typeof meta>

const options: Partial<IStory> = {
  args: {},
}
export const Default: IStory = {
  ...options,
}
