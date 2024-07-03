import {Meta, StoryObj} from '@storybook/react'
import {WuToast} from './WuToast'

const meta: Meta<typeof WuToast> = {
  component: WuToast,
}

export default meta
type IStory = StoryObj<typeof meta>

const options: Partial<IStory> = {
  args: {},
}
export const Default: IStory = {
  ...options,
}
