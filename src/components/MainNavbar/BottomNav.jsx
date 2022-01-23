import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useEffect } from "react";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TheatersIcon from "@mui/icons-material/Theaters";
import HomeIcon from "@mui/icons-material/Home";
import { useHistory } from "react-router-dom";

import "./BottomNav.css";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/treading");
    else if (value === 2) history.push("/movies");
    else if (value === 3) history.push("/series");

    // eslint-disable-next-line
  }, [value, history]);

  return (
    <Box
      style={{ zIndex: "2000" }}
      className="BottomNav"
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        justifyContent: "center",
      }}
    >
      <BottomNavigation
        style={{
          background: "black",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="BottomNavIcon"
          label="Home"
          icon={<HomeIcon />}
          style={{ color: "#abb7c4" }}
          color="primary"
        />
        <BottomNavigationAction
          className="BottomNavIcon"
          label="Treading"
          icon={<WhatshotIcon />}
          style={{ color: "#abb7c4" }}
          color="primary"
        />
        <BottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
          style={{ color: "#abb7c4" }}
        />
        <BottomNavigationAction
          label="Series"
          icon={<TheatersIcon />}
          style={{ color: "#abb7c4" }}
        />
      </BottomNavigation>
    </Box>
  );
}
