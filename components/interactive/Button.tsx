import { ComponentProps, ReactElement } from "react"
import { twMerge } from 'tailwind-merge'
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import LoadingSpinner from "../icons/LoadingSpinner";


const buttonVariants = cva(["rounded-lg", "py-2", "px-4", "disabled:bg-gray-200", "disabled:text-slate-500/50", "disabled:font-medium", "disabled:cursor-not-allowed",
    "cursor-pointer", "transition-colors", "duration-300", "inline-flex", "justify-center", 'items-center', "gap-x-2", "focus-visible:outline-none",], {
    variants: {
        intent: {
            primary: [
                "bg-primary",
                "hover:bg-primary-dark",
                "active:bg-primary-light",
                "text-white"
            ],
            danger: [
                "bg-danger",
                "hover:bg-danger-dark",
                "active:bg-danger-light",
                "text-white"
            ],
        },
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg"
        }
    },
    defaultVariants: {
        intent: "primary",
        size: "md"
    }
})

type ButtonVariants = VariantProps<typeof buttonVariants>

type ButtonProps = ComponentProps<'button'> & ButtonVariants & {
    label?: string,
    as?: "button" | "link",
    fullWidth?: boolean,
    icon?: ReactElement,
    iconAlignment?: "left" | "right",
    target?: ComponentProps<'a'>['target'];
    href?: ComponentProps<'a'>['href'];
    loading?: boolean;
}

const Button = ({ label, className, size = "md", intent = "primary", as = "button", fullWidth = false, href, target, icon, iconAlignment = "right", loading, disabled, ...props }: ButtonProps) => {
    if (as === "link")
        return <Link href={href ?? ""} target={target} className={twMerge(buttonVariants({ intent, size }), `${!label && icon && "p-2"}`, `${fullWidth && "w-full"}`, className)}>
            <>{iconAlignment === "left" && icon}{label}{iconAlignment === "right" && icon}</>
        </Link>

    return <button disabled={disabled} aria-disabled={disabled} {...props} className={twMerge(buttonVariants({ intent, size }), `${fullWidth && "w-full"}`, `${!label && icon && "p-2"}`, className)}>
        {!loading ? <>{iconAlignment === "left" && icon}{label}{iconAlignment === "right" && icon}</> : <LoadingSpinner />}
    </button>
}

export default Button