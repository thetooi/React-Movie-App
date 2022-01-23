import * as React from "react";
import "./LocalSearch.css";
import "./../../pages/PagesStyles.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  createMuiTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";

export default function LocalSearch({
  setSearchTerm,
  fetchSearchApi,
  searchTerm,
  media,
  placehold,
  treadingContent,
}) {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // const [numOfPages, setNumOfPages] = useState();
  const history = useHistory();
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#abb7c4;",
      },
    },
  });

  useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearchApi();
    history.push(`/${media}/${searchTerm}`);
    e.target.value.reset("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    fetchSearchApi();

    // eslint-disable-next-line
  }, [page]);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label={placehold}
            variant="outlined"
            onChange={handleChange}
            fullWidth
          />
          <Button
            variant="contained"
            style={{ marginLeft: 10 }}
            onClick={handleSubmit}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </ThemeProvider>
    </>
  );
}
