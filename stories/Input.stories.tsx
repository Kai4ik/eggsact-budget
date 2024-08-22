import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/interactive/Input";

const meta = {
    title: "Input",
    component: Input,
    args: {
        label: "First Name",
        placeholder: "Kirill",
    },
    argTypes: {
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {};

export const RequiredInput: Story = {
    args: {
        required: true,
    },
};

export const InputWithDetails: Story = {
    args: {
        label: "Password",
        details: "At least 8 characters"
    },
};

export const InputWithError: Story = {
    args: {
        label: "Password",
        details: "At least 8 characters",
        error: "Your password did not meet the criteria"
    },
};