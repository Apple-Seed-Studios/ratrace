import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Divider } from "@mui/material/";
import { useAuth } from "../../hooks/useAuth";
import { If, Then, Else } from "react-if";
import AvatarPic from "./Avatar";
import LogoutButton from "../Login/LogoutButton";
import LoginNavIcon from "../Login/LoginNavIcon";
import ThemeButton from "./ThemeButton";
import Routing from "../Routing/index";
import "./header.scss";

function Header(props) {
  const { isAuthenticated } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        flexGrow: 1,
      }}
    >
      <AppBar position="relative" className="header">
        <Toolbar>
          <ListAltIcon edge="start" aria-label="list logo" sx={{ mr: 2 }} />
          <Divider orientation="vertical" />
          <Typography variant="h6" color="inherit" noWrap>
            🐀 Rat-race
          </Typography>
          <Box className="navRightButtons">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Routing />
              <ThemeButton />
              <If condition={isAuthenticated}>
                <Then>
                  <AvatarPic />
                  <LogoutButton data-testid='logout_button'/>
                </Then>
                <Else>
                  <LoginNavIcon data-testid='login_button'/>
                </Else>
              </If>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
