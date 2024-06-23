export const signUpRequestPayload = (formContent) => {
  const { name:{value: _name}, password:{value: _password}, email:{value: _email} } = formContent;

  return {
    name:_name,
    password:_password,
    email:_email,
    roles: "user",
  };
};
