import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import Login from "./Login";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={{ md: 4, xs: 2 }}
      sx={{
        position: "sticky",
        backgroundColor: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchBar />
        {/* <Login /> */}
      </div>
    </Stack>
  );
};

export default Navbar;
