import type {Meta, StoryObj} from '@storybook/react'

import React from 'react'
import {WuButton} from './WuButton'
import {EWuButtonIconPosition} from './types/EWuButtonIconPosition'
import {EWuButtonSize} from './types/EWuButtonSize'
import {EWuButtonVariant} from './types/EWuButtonVariant'

const meta = {
  component: WuButton,
} satisfies Meta<typeof WuButton>

export default meta

type IStory = StoryObj<typeof meta>

const options: Partial<IStory> = {
  args: {
    variant: EWuButtonVariant.PRIMARY,
    size: EWuButtonSize.MD,
    disabled: false,
    loading: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      options: Object.values(EWuButtonVariant),
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(EWuButtonSize),
      control: {
        type: 'select',
      },
    },
    onClick: {
      action: 'clicked',
    },
    iconPosition: {
      options: Object.values(EWuButtonIconPosition),
      control: {
        type: 'select',
      },
    },
  },
}
export const Primary: IStory = {
  ...options,
  render: args => <WuButton {...args}>Primary</WuButton>,
}
export const Secondary: IStory = {
  ...options,
  render: args => (
    <WuButton {...args} variant={EWuButtonVariant.SECONDARY}>
      Secondary
    </WuButton>
  ),
}
export const Outline: IStory = {
  ...options,
  render: args => (
    <WuButton {...args} variant={EWuButtonVariant.OUTLINE}>
      Outline
    </WuButton>
  ),
}
export const Link: IStory = {
  ...options,
  render: args => (
    <WuButton {...args} variant={EWuButtonVariant.LINK}>
      Link
    </WuButton>
  ),
}
export const Disabled: IStory = {
  ...options,
  render: args => (
    <WuButton {...args} disabled>
      Disabled
    </WuButton>
  ),
}

export const UserClass: IStory = {
  ...options,
  args: {
    className: 'bg-rose-300 text-rose-900',
  },
  render: args => <WuButton {...args}>User class and style</WuButton>,
}
export const Loading: IStory = {
  ...options,

  render: args => (
    <WuButton {...args} loading>
      User class and style
    </WuButton>
  ),
}

export const WithIcon: IStory = {
  ...options,
  args: {
    icon: 'home',
    iconPosition: EWuButtonIconPosition.LEFT,
  },

  render: args => <WuButton {...args}>User class and style</WuButton>,
}
