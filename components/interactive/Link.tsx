import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

type LinkProps = ComponentProps<"a"> & {
    label?: string;
    icon?: ReactElement;
    iconAlignment?: "left" | "right";
    addUnderline?: boolean;
    monochrome?: boolean;
};

const Link = ({
    label, href, className, iconAlignment = "right", icon, addUnderline, monochrome, ...props
}: LinkProps) => {
    return (
        <NextLink
            href={href ?? ""}
            {...props}
            className={twMerge(
                className,
                monochrome ? `${addUnderline && "border-b border-current"}` : `${addUnderline && "border-b border-primary"} text-primary hover:text-primary-dark active:text-primary-light hover:border-b hover:border-primary-dark active:border-primary-light`,
                "inline-flex justify-center items-center gap-x-2",
                "transition-colors duration-300 leading-5"

            )}
        >
            {iconAlignment === "left" && icon}
            {label}
            {iconAlignment === "right" && icon}
        </NextLink>

    );
}

export default Link