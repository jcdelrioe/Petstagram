import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables })
              .then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
              })
              .catch((e) => {
                console.error(e.graphQLErrors[0].message);
              });
          };

          const errorMsg = error && error.graphQLErrors[0].message;

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables })
              .then(({ data }) => {
                const { login } = data;
                activateAuth(login);
              })
              .catch((e) => {
                console.error(e.graphQLErrors[0].message);
              });
          };
          const errorMsg = error && error.graphQLErrors[0].message;

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar Sesion"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
