import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  function handleAdmin() {
    navigate("/admin/login");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-50 border loginForm">
        <h3 className="text-center">Login As</h3>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button type="button" className="btn btn-primary mr-2 text-white">
            Employee
          </button>
          <button
            type="button"
            className="btn btn-primary text-white"
            onClick={handleAdmin}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
