import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { parseJwt } from "../utils/jwt";
import { setStateEmail } from "../store/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7007/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      //if (!res.ok)
      if (res.status >= 400) {
        const data = await res.text();
        setErrorMessage(data);
        console.log(data);
      } else {
        const data = await res.json();
        localStorage.setItem("jwt", data.access);

        const decodeJwT = parseJwt(data.access);
        const { payload } = decodeJwT;
        const { email } = payload;

        dispatch(setStateEmail(email));

        navigate("/");
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
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={onEmailChangeHandler}
            noValidate
          />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Password
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={onPasswordChangeHandler}
          />
        </label>
      </div>
      <p>{errorMessage}</p>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
