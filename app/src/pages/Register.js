import { useState } from "react";

function Register() {
  const [errorMessage, setErrorMessage] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    const email = elements.email.value
    const password = elements.password.value
    const password2 = elements.password2.value
    
    try {
      const res = await fetch("http://localhost:7007/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          password2: password2
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //if (!res.ok)
      if (!res.ok) {
        const data = await res.text();
        setErrorMessage(data);
        console.log(data)
      }
    } catch (error) {
      console.log("catch error:", error);
    }

  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label className="form-label">
          Email address
          <input name="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            noValidate
          />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Password
          <input name="password"  type="password" className="form-control" />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Password2
          <input  name="password2" type="password" className="form-control" />
        </label>
      </div>

      <p>{errorMessage}</p>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Register;
