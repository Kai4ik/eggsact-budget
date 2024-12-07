import * as yup from "yup";

export type LoginFormData = {
  email: string;
  password: string;
};

const schema = yup.object<LoginFormData>().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

export default schema;
