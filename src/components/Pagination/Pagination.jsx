import * as React from "react";
// import Pagination from "@mui/material/Pagination";
import Pagination from "@material-ui/lab/Pagination";

import "./Pagination.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      backgroundColor: "#2c2540",
    },
    "& .MuiPaginationItem-ellipsis": {
      color: "#fff",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .Mui-selected": {
      color: "#fff",
      background: "linear-gradient(45deg, #00aeff, #a68eff)",
      "&:hover": {
        backgroundColor: "#66c94d",
      },
    },
  },
}));
export default function Pagination2({
  setPage,
  numOfPages,
  media,
  searchTerm,
}) {
  const history = useHistory();
  const classes = useStyles({
    setPage,
    numOfPages,
    media,
    searchTerm,
  });

  const handlePageChenge = (page) => {
    window.scroll(0, 0);
    if (searchTerm) history.push(`/${media}/${searchTerm}/page/${page}`);
    else {
      history.push(`/${media}/page/${page}`);
    }
    setPage(page);
  };

  return (
    <div className="pagin">
      <Pagination
        count={numOfPages}
        shape="rounded"
        color="primary"
        classes={{ ul: classes.ul }}
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(e) => handlePageChenge(e.target.textContent)}
      />
    </div>
  );
}
