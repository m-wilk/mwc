import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user";

function Nav() {
  const dispatch = useDispatch();

  const loggedUserEmail = useSelector((state) => {
    return state.user.email;
  });

  const productsLength = useSelector((state) => {
    return state.basket.qty;
  });

  const logOutHandler = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              O nas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Produkty
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Kontakt
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Zaloguj się
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Zarejstruj się
            </Link>
          </li>
          <li>
            <button onClick={logOutHandler}>Wyloguj się</button>
          </li>
          <li className="nav-item">
            <Link className="btn btn-success" to="/basket">
              Koszyk ({ productsLength })
            </Link>
          </li>
        </ul>
      </nav>
      {loggedUserEmail && <p>Witaj {loggedUserEmail}</p>}
    </div>
  );
}

export default Nav;
