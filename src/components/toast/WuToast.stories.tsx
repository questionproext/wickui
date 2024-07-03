import {Meta, StoryObj} from '@storybook/react'
import React from 'react'
import {WuButton} from '../button'
import {WuToast} from './WuToast'
import {useWuShowToast} from './hooks/useWuShowToast'

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
  render: () => {
    const {showToast} = useWuShowToast()
    return (
      <div>
        <WuButton onClick={() => showToast('Hello World')}>Show Toast</WuButton>
        <WuToast />
      </div>
    )
  },
}

export const Variant: IStory = {
  ...options,
  render: () => {
    const {showToast: showSuccess} = useWuShowToast({variant: 'success'})
    const {showToast: showError} = useWuShowToast({variant: 'error'})
    const {showToast: showWarning} = useWuShowToast({variant: 'warning'})
    const {showToast: showInfo} = useWuShowToast({variant: 'info'})
    return (
      <div className="flex gap-4">
        <WuButton
          onClick={() => showSuccess('Hello World')}
          className="bg-green-700"
        >
          Show Success
        </WuButton>
        <WuButton
          onClick={() => showError('Hello World')}
          className="bg-red-700"
        >
          Show Error
        </WuButton>
        <WuButton
          onClick={() => showWarning('Hello World')}
          className="bg-orange-500"
        >
          Show Warning
        </WuButton>
        <WuButton
          onClick={() => showInfo('Hello World')}
          className="bg-blue-700"
        >
          Show Info
        </WuButton>
        <WuToast />
      </div>
    )
  },
}
