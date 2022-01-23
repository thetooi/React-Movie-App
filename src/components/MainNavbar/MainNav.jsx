import Heading from "../Header/Heading";
import "./MainNav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import { useHistory } from "react-router-dom";
const MainNav = () => {
  // const history = useHistory();
  // const handleFocus = () => {
  //   history.push("/search");
  // };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/treading">
                Treading
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/series">
                TvSeries
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </li> */}
          </ul>

          <div className="all__right">
            <form className="footer-email-form ">
              <input type="email" placeholder="Search Movies, Tv Series" />
              <button>
                <SearchIcon />
              </button>
              <div>
                {/* <button class="footer-email-submit">Subscribe now</button> */}
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
