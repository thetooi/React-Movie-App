import axios from "axios";
import { useEffect, useState } from "react";
import SingleData from "../../components/SingleData/SingleData";
import "./TreadingHome.css";
import "./../PagesStyles.css";
import Pagination from "../../components/Pagination/Pagination";

const Treading = () => {
  const [treadingContent, setTreadingContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTreadinApi = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setTreadingContent(data.results);
    // eslint-disable-next-line
  };

  useEffect(() => {
    fetchTreadinApi();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <div
        style={{ marginTop: "0px", color: "white" }}
        className="TreadingHome"
      >
        <h3> Treading Shows</h3>
      </div>
      <Pagination
        setPage={setPage}
        page={page}
        media="treading"
        numOfPages="3"
      />
      <div className="ListContent">
        {treadingContent &&
          treadingContent.map((n) => <SingleData key={n.id} {...n} />)}
      </div>
      <Pagination
        setPage={setPage}
        page={page}
        media="treading"
        numOfPages="3"
      />
    </>
  );
};

export default Treading;
