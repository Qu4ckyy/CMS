import { useRef, useContext } from "react";
import "./LoginForm.scss";
import { AppContext } from "../context/app.context";

const LoginForm = () => {
  const { setLogged } = useContext(AppContext);
  const loginRef = useRef();
  const passwordRef = useRef();

  const loginFn = () => {
    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    if (login === "admin" && password === "admin123") {
      setLogged(true);
    }
  };

  return (
    <div className="LoginForm-container">
      <h1>Login Form</h1>
      <div>
        <form>
          <input ref={loginRef} type="text" placeholder="Login" />
          <input ref={passwordRef} type="password" placeholder="Hasło" />
          <button onClick={loginFn} type="button">
            Zaloguj
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
