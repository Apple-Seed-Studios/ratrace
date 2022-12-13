import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material/";

export default function Routing() {
  return (
    <>
      <Button component={Link} to={"/"}>
        Home
      </Button>
      <Button component={Link} to={"/about"}>
        About
      </Button>
      <Button component={Link} to={"/progress"}>
        Graphs
      </Button>
    </>
  );
}
