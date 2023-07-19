import ERROR_PAGE from "../utils/img/oops-something-went-wrong.png";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src={ERROR_PAGE} alt="Error" className="error-page" />
      <h1 style={{ color: "green" }}>
        {"Description : "}
        {err.status}: {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
