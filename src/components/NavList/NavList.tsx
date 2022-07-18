import { AppBar, Container, Toolbar, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";

//css
import "./index.css";

function NavList() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={NavLink}
              to={ROUTES.HOME_PAGE}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to={ROUTES.CREATE_PAGE}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Create post
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavList;
