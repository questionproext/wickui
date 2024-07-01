import type { Meta, StoryObj } from "@storybook/react";

import { WuButton } from "./WuButton";
import { WuButtonSizeEnum } from "./types/WuButtonSizeEnum";
import { WuButtonVariantEnum } from "./types/WuButtonVariantEnum";

const meta = {
  component: WuButton,
} satisfies Meta<typeof WuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const options: Partial<Story> = {
  args: {
    variant: WuButtonVariantEnum.PRIMARY,
    size: WuButtonSizeEnum.MD,
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: Object.values(WuButtonVariantEnum),
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(WuButtonSizeEnum),
      control: {
        type: "select",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
};
export const Primary: Story = {
  ...options,
  render: (args) => <WuButton {...args}>Primary</WuButton>,
};
export const Secondary: Story = {
  ...options,
  render: (args) => (
    <WuButton {...args} variant={WuButtonVariantEnum.SECONDARY}>
      Secondary
    </WuButton>
  ),
};
export const Outline: Story = {
  ...options,
  render: (args) => (
    <WuButton {...args} variant={WuButtonVariantEnum.OUTLINE}>
      Outline
    </WuButton>
  ),
};
export const Link: Story = {
  ...options,
  render: (args) => (
    <WuButton {...args} variant={WuButtonVariantEnum.LINK}>
      Link
    </WuButton>
  ),
};
export const Disabled: Story = {
  ...options,
  render: (args) => (
    <WuButton {...args} disabled>
      Disabled
    </WuButton>
  ),
};

export const UserClass: Story = {
  ...options,
  args: {
    className: "bg-rose-300 text-rose-900",
  },
  render: (args) => <WuButton {...args}>User class and style</WuButton>,
};
export const Loading: Story = {
  ...options,
  render: (args) => (
    <WuButton {...args} loading>
      User class and style
    </WuButton>
  ),
};
