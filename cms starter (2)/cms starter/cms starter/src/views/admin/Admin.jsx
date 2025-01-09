import "./Admin.scss";
import { Dashboard, LoginForm } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../components/context/app.context";

const Admin = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="admin-container">
      {logged ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default Admin;
