import * as yup from "yup";

import type { Asserts, Schema, ValidationError } from "yup";

const envSchemaValidator = <S extends Schema<unknown>, const E extends object>(
  schema: S,
  envVars: E,
): Asserts<S> => {
  try {
    return schema.validateSync(envVars, {
      strict: false,
      abortEarly: true,
      stripUnknown: false,
      recursive: true,
    });
  } catch (error: unknown) {
    const { errors, path } = error as ValidationError;
    // eslint-disable-next-line no-console
    console.log(
      "\u001B[31m",
      `Fix the env ${String(path)} error "( ———> ${errors.join(", ")} <——— )"`,
      "\u001B[0m",
      "\n",
    );
    throw new Error(`Fix the env ${String(path)} error ${errors.join(", ")}`);
  }
};

const schema = yup
  .object({
    NEXT_PUBLIC_SUPABASE_URL: yup.string().required(),
    NEXT_PUBLIC_SUPABASE_SECRET_KEY: yup.string().required(),
  })
  .required();

const vars = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_SECRET_KEY: process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY,
};

export default envSchemaValidator(schema, vars);
