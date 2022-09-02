import React from "react";
import { SHeader } from "./header.style";
import SettingsIcon from "@mui/icons-material/Settings";
import { Grid, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <SHeader>
      <header>
        <Grid container>
          <Grid item xs={6}>
            <div>
              <HomeIcon color="disabled" /> / Dashboard
              <h3>Dashboard</h3>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div className="header-right">
              <TextField
                id="outlined-basic"
                label="Search here"
                variant="outlined"
                size="small"
                
              />
              <NotificationsIcon color="disabled" />
              <AccountCircleIcon color="disabled" />
              <SettingsIcon color="disabled" />
            </div>
          </Grid>
        </Grid>
      </header>
    </SHeader>
  );
}
