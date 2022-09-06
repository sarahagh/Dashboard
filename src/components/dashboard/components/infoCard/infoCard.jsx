import { Grid } from "@mui/material";
import React from "react";
import { SInfoCard } from "./infoCard.style";
import WeekendIcon from "@mui/icons-material/Weekend";
import BarChartIcon from '@mui/icons-material/BarChart';
import StoreIcon from '@mui/icons-material/Store';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function InfoCard() {
  return (
    <SInfoCard>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <div className="info-card-item">
            <div   className="info-card-item-icon-wrapper">
              <WeekendIcon />
            </div>
            <p>Bookings</p>
            <h4>281</h4>

            <hr />
            <span>
              <b>+55%</b> than lask week
            </span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="info-card-item">
            <div style={{background:" linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"}} className="info-card-item-icon-wrapper">
              <BarChartIcon />
            </div>
            <p>Bookings</p>
            <h4>281</h4>

            <hr />
            <span>
              <b>+55%</b> than lask week
            </span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="info-card-item">
            <div style={{background: "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"}} className="info-card-item-icon-wrapper">
              <StoreIcon />
            </div>
            <p>Bookings</p>
            <h4>281</h4>

            <hr />
            <span>
              <b>+55%</b> than lask week
            </span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="info-card-item">
            <div style={{background:" linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"}} className="info-card-item-icon-wrapper">
              <PersonAddIcon />
            </div>
            <p>Bookings</p>
            <h4>281</h4>

            <hr />
            <span>
              <b>+55%</b> than lask week
            </span>
          </div>
        </Grid>
      </Grid>
    </SInfoCard>
  );
}

export default InfoCard;
