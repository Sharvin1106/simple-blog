import * as React from "react";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  websiteName: string;
};

const AppBar: React.FC<Props> = ({ websiteName }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {websiteName}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
