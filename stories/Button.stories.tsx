import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/interactive/Button";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

const meta = {
  title: "Button",
  component: Button,
  args: {
    label: "Button Text",
    size: "md",
    intent: "primary",
    fullWidth: false,
  },
  argTypes: {
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top", "_unfencedTop"],
      table: { disable: true },
    },
    href: {
      control: "text",
      table: { disable: true },
    },
    intent: {
      control: "select",
      options: ["primary", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    as: {
      table: { disable: true },
    },
    icon: {
      control: "select",
      options: ["Plus", "Checkmark"],
      mapping: {
        Plus: <FaPlus />,
        Checkmark: <IoIosCheckmark size={20} />,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  argTypes: {
    intent: {
      table: { disable: true },
    },
  },
};

export const DangerButton: Story = {
  args: {
    intent: "danger",
  },
  argTypes: {
    intent: {
      table: { disable: true },
    },
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
  },
};

export const ButtonWithIcon: Story = {
  args: {
    icon: <FaPlus />,
  },
};

export const OnlyIconButton: Story = {
  args: {
    label: "",
    icon: <FaPlus />,
  },
  argTypes: {
    label: {
      table: { disable: true },
    },
  },
};
