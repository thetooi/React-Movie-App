import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import SingleData from "../../components/SingleData/SingleData";
import "./../PagesStyles.css";
import { useHistory } from "react-router-dom";
import SearchBox from "./SearchBox";

const Search = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const media = "tv";
  const mediamo = "movie";

  const fetchSearchApi = async () => {
    try {
      const SEARCH_API = `https://api.themoviedb.org/3/search/${
        media || mediamo
      }?api_key=${
        process.env.REACT_APP_API_KEY
      }&query=${searchTerm}&page=${page}&sort_by=popularity.desc`;
      const { data } = await axios.get(SEARCH_API);
      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchApi();
    history.push(`/${searchTerm}`);
  };

  useEffect(() => {
    fetchSearchApi();

    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <SearchBox
        fetchSearchApi={fetchSearchApi}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {numOfPages > 1 && (
        <Pagination
          setPage={setPage}
          numOfPages={numOfPages}
          media="search"
          page={page}
          style={{ marginBottom: "10px" }}
          searchTerm={searchTerm}
        />
      )}
      <div className="ListContent my-5">
        {content &&
          content.map((n) => (
            <SingleData key={n.id} {...n} mediaType={media || mediamo} />
          ))}
      </div>
      {searchTerm && !content && <h2>No Series Found</h2>}
      {numOfPages > 1 && (
        <Pagination
          setPage={setPage}
          numOfPages={numOfPages}
          media="search"
          page={page}
          style={{ marginBottom: "10px" }}
          searchTerm={searchTerm}
        />
      )}
    </>
  );
};

export default Search;
