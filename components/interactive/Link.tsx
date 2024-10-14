import { ComponentProps, ReactElement, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import NextLink, { LinkProps as LP } from "next/link";

type LinkProps = ComponentProps<"a"> & LP & {
    icon?: ReactElement;
    iconAlignment?: "left" | "right";
    addUnderline?: boolean;
    monochrome?: boolean;
};

const Link = ({
    href, className, iconAlignment = "right", icon, addUnderline, monochrome, children, ...props
}: PropsWithChildren<LinkProps>) => {
    return (
        <NextLink
            href={href ?? ""}
            {...props}
            className={twMerge(
                className,
                monochrome ? `${addUnderline && "border-b border-current"}` : `${addUnderline && "border-b border-primary"} text-primary hover:text-primary-dark active:text-primary-light hover:border-b hover:border-primary-dark active:border-primary-light`,
                "inline-flex justify-center items-center gap-x-2 w-fit",
                "transition-colors duration-300 leading-5"

            )}
        >
            {iconAlignment === "left" && icon}
            {children}
            {iconAlignment === "right" && icon}
        </NextLink>

    );
}

export default Link