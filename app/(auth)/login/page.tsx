"use client"

import Image from "next/image";
import FormWrapper from "@components/forms/FormWrapper"
import Input from "@components/interactive/Input";
import Button from "@/components/interactive/Button";
import Paragraph from "@/components/typography/Paragraph";
import Link from "@/components/interactive/Link";
import LoginSchema from "@utils/schemas/login.schema"

export default function Login() {
    const handleSubmit = () => { }

    const dv = {
        email: "",
        password: ""
    }

    return (
        <main className="flex min-h-screen w-full relative justify-center items-center">
            <div className="flex gap-y-8 h-fit shadow-2xl w-[80vw] md:w-[50vw] lg:w-[40vw] 2xl:w-[30vw] flex-col justify-center items-center backdrop-blur-lg bg-zinc-200 bg-opacity-70 py-16 px-16 rounded-lg">
                <Image src="/assets/grocery.png" alt="Receipt" width={100} height={100} />
                <h2>Welcome Back</h2>
                <Paragraph>Please enter your details to sign in</Paragraph>
                <FormWrapper defaultValues={dv} onSubmit={handleSubmit} schema={LoginSchema} classname="flex flex-col gap-y-4 w-full">
                    <Input name="email" label="Email" type="email" required fullWidth />
                    <Input name="password" label="Password" type="password" required fullWidth />
                    <Link href="#" addUnderline className="self-center">Forgot password?</Link>
                    <Button label="Login" type="submit" />
                </FormWrapper>
            </div>
        </main>
    );
}
