"use client"

import { useForm } from "react-hook-form";
import { PropsWithChildren, Children, createElement, isValidElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

type WrapperProps = {
    onSubmit: () => void,
    defaultValues?: { [key: string]: string; }
    classname?: string;
    schema: ObjectSchema<{ [key: string]: string; }>
};

export default function FormWrapper({ defaultValues, classname, children, onSubmit, schema }: PropsWithChildren<WrapperProps>) {
    const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classname}>
            {Children.map(children, child => {
                return isValidElement(child) && child?.props.name ?
                    createElement(child.type, {
                        ...{
                            ...child.props,
                            register: methods.register,
                            key: child.props.name
                        }
                    })
                    : child
            })}
        </form>
    );
}
