import { Box, Typography } from "@mui/material/";
import Copyright from "./Copyright/index";
import "./footer.scss";

function Footer(props) {
  return (
    <Box
      component="footer"
      className="footer"
      //   sx={{ position: isAuthenticated ? "absolute": "relative",
      // bottom:0}}
    >
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Planting one seed at a time™
      </Typography>
      <Copyright />
    </Box>
  );
}

export default Footer;
