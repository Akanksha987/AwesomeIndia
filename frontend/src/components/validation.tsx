type LoginFormValues = {
  username: string;
  password: string;
};

type ValidationErrors = {
  username?: string;
  password?: string;
};

const validation = (values: LoginFormValues): ValidationErrors => {
  let errors: ValidationErrors = {};

  if (!values.username) {
    errors.username = "Name is required.";
  }

  if (!values.password) {
    errors.password = "Password is required.";
  }

  return errors;
};

export default validation;
