import React from "react";
import { useForm } from "react-hook-form";
import "D:/WorldBank/Login Form/react-login-form/src/LoginForm.css";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }

  return (
    <div className="login-form">
      <button type="submit" > <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" width="30" height="30"/> Continue with Google</button>
      <>OR</>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register({
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register({ required: "Enter your password" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit" align = "center" padding = "10px 100px 10px 100px">Login</button>
      </form>
      <tr>
     <td><a href ={"Use single sign-on</label"}>Use single sign-on</a></td><br></br>
     <td><a href ={"Reset Password"}>Reset Password</a></td>
     <td>No account?<a href ={"Create one"}>Create one</a></td>
     </tr>
    </div>
  );
};

export default LoginForm;
