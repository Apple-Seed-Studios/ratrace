import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"  Copyright © "}
      <Link
        color="inherit"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Apple-Seed-Studios"
      >
        Apple Seed Studios 🐀
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
