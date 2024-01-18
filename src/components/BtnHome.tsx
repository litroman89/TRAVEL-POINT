import { Link } from "react-router-dom";

import "./btnHome.scss";

const BtnHome = () => {
  return (
    <Link to="/">
      <button className="btn-home">На головну</button>
    </Link>
  );
};

export default BtnHome;
