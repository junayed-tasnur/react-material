import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const Navbars = () => {
  const theme = useTheme();
  const [open, setopen] = useState(false);
  const ismobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = ["About", "Service", "Projects", "Contacts"];

  return (
    <>
      <div className="">
        <AppBar
          elevation={0}
          className="Navbar  "
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #fafafa",
          }}
        >
          <Toolbar>
            {ismobile ? (
              <div>
                <IconButton color="inherit" onClick={() => setopen(true)}>
                  <MenuIcon />
                </IconButton>
              </div>
            ) : (
              <>
                <Typography sx={{ flexGrow: 1 }}>
                  <img className="cursor-pointer" src="/degic 1.png" alt="" />
                </Typography>
                {menuItems.map((item) => (
                  <Button color="inherit" key={item}>
                    {item}
                  </Button>
                ))}

                <Button
                  variant="outlined"
                  sx={{
                    color: "#2ab691",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#21b666",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={open} onClose={() => setopen(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={() => setopen(false)}>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            ))}
            <ListItem Button>
              {" "}
              <ListItemText primary="Sign Up" />{" "}
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Navbars;
