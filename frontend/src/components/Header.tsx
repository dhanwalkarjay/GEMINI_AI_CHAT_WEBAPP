import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "#5671a3", position: "static", boxShadow: "0px 0px 0px 2px #64f3d5", positon: "absolute" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink             
                bg="white"
                to="/chat"
                text="Chat's"
                textColor="black"
              />
              <NavigationLink
                bg="#00fffc"
                textColor="black"
                to="/"
                text="logout"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="white"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavigationLink
                bg="#00fffc"
                textColor="black"
                to="/signup"
                text="Signup"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
