import axios from "axios";
import { useEffect, useState } from "react";
import Pagination2 from "../../components/Pagination/Pagination";
import LocalSearch from "../../components/Search/LocalSearch";
import SingleData from "../../components/SingleData/SingleData";
import $ from "jquery";

const Movies = () => {
  const [treadingContent, setTreadingContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovieApi = async () => {
    $(window).on("load", function () {
      if ($("#preloader").length) {
        $("#preloader")
          .delay(100)
          .fadeOut("slow", function () {
            $(this).remove();
          });
      }
    });
    const { data } = await axios.get(
      ` 
      https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc
      `
    );
    // eslint-disable-next-line
    setTreadingContent(data.results);
    // eslint-disable-next-line
    setNumOfPages(100);
  };

  const fetchSearchApi = async () => {
    if (searchTerm) {
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${page}&sort_by=popularity.desc`;
      const { data } = await axios.get(SEARCH_API);
      setTreadingContent(data.results);
      setNumOfPages(data.total_pages);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);

    if (searchTerm) {
      fetchSearchApi();
    } else {
      fetchMovieApi();
    }
    return () => {
      setTreadingContent(); //clean up
    };
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div
        style={{ marginTop: "0px", color: "white" }}
        className="TreadingHome"
      >
        <h3>Movies</h3>
      </div>
      <LocalSearch
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        fetchSearchApi={fetchSearchApi}
        numOfpages={numOfPages}
        media="movies"
        placehold="Search Movies"
      />

      <div className="pag">
        <Pagination2
          setPage={setPage}
          numOfPages={numOfPages}
          media="movies"
          page={page}
          searchTerm={searchTerm}
          style={{ marginBottom: "10px" }}
        />
      </div>

      <div className="ListContent">
        {treadingContent &&
          treadingContent.map((n) => (
            <SingleData key={n.id} {...n} mediaType="movie" />
          ))}
        <div id="preloader"></div>

        {searchTerm && !treadingContent && <h2>NO Series Found </h2>}
      </div>
      <Pagination2
        setPage={setPage}
        numOfPages={numOfPages}
        media="movies"
        searchTerm={searchTerm}
        page={page}
      />
    </>
  );
};

export default Movies;
