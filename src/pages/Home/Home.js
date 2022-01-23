import axios from "axios";
import { useEffect, useState } from "react";
import SingleData from "../../components/SingleData/SingleData";
import "./Home.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Navbar from "../../components/HomeNav/HomeNav";
const Home = () => {
  const [allContent, setAllContent] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRated, setTopRated] = useState([]);

  // const [theTrailers, setTheTrailers] = useState();
  // const history = useHistory();

  const fetchPopularMovieApi = async () => {
    try {
      const { data } = await axios.get(` 
     https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setAllContent(filter);
      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  // const fetchLatestTrailerApi = async () => {
  //   try {
  //     const { data } = await axios.get(`
  //   https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
  //     const alldata2 = data.results;
  //     const trailerSlice = alldata2.slice(0, 4);
  //     setTheTrailers(trailerSlice);
  //     // eslint-disable-next-line
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const fetchPopularSeriesApi = async () => {
    try {
      const { data } = await axios.get(` 
      https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setPopularSeries(filter);
      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  const fetchTopRatedApi = async () => {
    try {
      const { data } = await axios.get(` 
      https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      const alldata = data.results;
      const filter = alldata.slice(0, 7);
      setTopRated(filter);
      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);

    fetchPopularMovieApi();
    fetchPopularSeriesApi();
    fetchTopRatedApi();
    // fetchLatestTrailerApi();
    // eslint-disable-next-line
    return () => {
      setPopularSeries();
      setAllContent();
      // setTheTrailers();
    };
  }, []);
  // const handleFocusChange = (e) => {
  //   history.push(`/search`);
  // };

  return (
    <>
      <div style={{ marginTop: "-10px" }} className="bg__home">
        <Navbar />
      </div>
      <div className="TreadingHome">
        <div className="title__home">
          <div className="btn__home">
            <h6>
              Movies On Air &#160;
              <span style={{ paddingTop: "10px" }}>&#11166;</span>
            </h6>
          </div>
          <div className="view__more">
            <Link to="/movies">
              <p>View more &#187;</p>
            </Link>
          </div>
        </div>

        <div className="ListContent2">
          {allContent &&
            allContent.map((n) => (
              <SingleData key={n.id} {...n} mediaType="movie" />
            ))}
        </div>
      </div>

      <div className="TreadingHome">
        <div className="title__home">
          <div className="btn__home" style={{ width: "160px" }}>
            <h6>
              TvSeries On Air &#160;
              <span style={{ paddingTop: "10px" }}>&#11166;</span>
            </h6>
          </div>
          <div className="view__more">
            <Link to="/series">
              <p>View more &#187;</p>
            </Link>
          </div>
        </div>
        <div className="ListContent2">
          {popularSeries &&
            popularSeries.map((n) => (
              <SingleData key={n.id} mediaType="tv" {...n} />
            ))}
        </div>
      </div>

      <div className="TreadingHome">
        <div className="title__home">
          <div className="btn__home" style={{ width: "160px" }}>
            <h6>
              Top Rated &#160;
              <span style={{ paddingTop: "10px" }}>&#11166;</span>
            </h6>
          </div>
          <div className="view__more">
            <Link to="/movies">
              <p>View more &#187;</p>
            </Link>
          </div>
        </div>
        <div className="ListContent2">
          {topRated &&
            topRated.map((n) => (
              <SingleData key={n.id} mediaType="movie" {...n} />
            ))}
        </div>
      </div>

      {/* <div className="all">
        <div
          className="TrailerContent"
          // style={{    backgroundImage: `url(${maker})` }}
        >
          <div className="TrailerContent__title" style={{ marginLeft: "10px" }}>
            <h2>
              Latest Trailers&#160;{"  "}
              <span style={{ paddingTop: "10px" }}>&#11166;</span>
            </h2>
          </div>
          <div className="ListContent3">
            {theTrailers &&
              theTrailers.map((n) => (
                <GetVideos
                  key={n.id}
                  id={n.id}
                  url={n.backdrop_path}
                  title={n.title}
                />
              ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
