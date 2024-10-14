import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = ComponentProps<"input"> & {
    label: string;
    fullWidth?: boolean;
    textColor?: string;
    details?: string;
    error?: string;
};


const Input = ({
    label,
    fullWidth = false,
    textColor,
    details,
    error,
    required = false,
    ...props
}: InputProps) => {
    return <div>
        <label className={twMerge("flex flex-col", fullWidth ? "w-full" : "w-fit", textColor ?? "text-primary-dark")}>
            <span className={`ml-1 text-lg text-left mb-2 ${required && "after:content-['*'] after:ml-1"}`}>{label}</span>
            <input  {...props} required={required} className="rounded-md py-2 px-4 mb-1 text-neutral-800 placeholder:text-gray-400
            focus:outline-none focus:ring-2" />
            {details && !error && <span className="text-xs ml-2 lowercase text-gray-600">{details}</span>}
            {error && <span className="text-xs ml-2 lowercase text-danger-dark">{error}</span>}
        </label>
    </div>
}

export default Input