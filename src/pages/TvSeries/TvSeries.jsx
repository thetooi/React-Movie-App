import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import LocalSearch from "../../components/Search/LocalSearch";
import SingleData from "../../components/SingleData/SingleData";

const TvSeries = () => {
  const [treadingContent, setTreadingContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovieApi = async () => {
    try {
      const { data } = await axios.get(
        ` 
        https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc
        `
      );
      setTreadingContent(data.results);
      setNumOfPages(100);
      console.log(data);

      // eslint-disable-next-line
    } catch (error) {
      console.error(error);
    }
  };
  const fetchSearchApi = async () => {
    if (searchTerm) {
      const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=${page}&sort_by=popularity.desc`;
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
        <h3>TV series</h3>
      </div>
      <LocalSearch
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        fetchSearchApi={fetchSearchApi}
        numOfpages={numOfPages}
        media="series"
        placehold="Search Tv Series"
      />

      <Pagination
        setPage={setPage}
        numOfPages={numOfPages}
        media="series"
        page={page}
        searchTerm={searchTerm}
        style={{ marginBottom: "10px" }}
      />
      <div className="ListContent">
        {treadingContent &&
          treadingContent.map((n) => (
            <SingleData key={n.id} {...n} mediaType="tv" />
          ))}
      </div>
      {numOfPages > 1 && (
        <Pagination
          setPage={setPage}
          numOfPages={numOfPages}
          media="series"
          page={page}
          searchTerm={searchTerm}
          style={{ marginBottom: "10px" }}
        />
      )}
    </>
  );
};

export default TvSeries;
