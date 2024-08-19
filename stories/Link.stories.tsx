import type { Meta, StoryObj } from "@storybook/react";
import Link from "@/components/interactive/Link";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

const meta = {
    title: "Link",
    component: Link,
    args: {
        label: "Link Text", href: "https://github.com/Kai4ik?tab=repositories"
    },
    argTypes: {
        target: {
            control: "select",
            options: ["_self", "_blank", "_parent", "_top", "_unfencedTop"],
        },
        href: {
            control: "text",
        },

        icon: {
            control: "select",
            options: ["Plus", "Checkmark"],
            mapping: {
                Plus: <FaPlus size={14} />,
                Checkmark: <IoIosCheckmark size={22} />,
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLink: Story = {};

export const LinkWithIcon: Story = {
    args: {
        icon: <FaPlus size={14} />,
    },
    argTypes: {
        label: {
            table: { disable: true },
        },
    },
};

export const MonochromeLink: Story = {
    args: {
        monochrome: true
    },
};

export const LinkWithUnderline: Story = {
    args: {
        addUnderline: true
    },
};