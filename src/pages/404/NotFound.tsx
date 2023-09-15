import { Link } from "react-router-dom";
import { RouteNames } from "../../routers/routes";
import error from "../../assets/png/404.png";
import "./NotFound.scss";
import "../../components/UI/Button/Button.scss";

function NotFound() {
  return (
    <main className="main">
      <section className="notFound">
        <div className="notFound__container">
          <h3>Oops....</h3>
          <h3>Page not found</h3>
          <p>This Page doesn`t exist or was removed! We suggest you go back.</p>
          <Link to={RouteNames.HOME} className="defaultButton">
            Go back
          </Link>
        </div>
        <img src={error} alt="error" />
      </section>
    </main>
  );
}

export { NotFound };
