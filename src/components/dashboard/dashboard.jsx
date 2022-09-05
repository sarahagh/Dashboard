import React, { useEffect, useState } from "react";
import InfoCard from "./components/infoCard/infoCard";
import ChartSection from "./components/chartSection/chartSection";
import Projects from "./components/projects/projects";
import { Grid } from "@mui/material";
import OrdersOverview from "./components/ordersOverview/ordersOverview";
import axios from "axios";

export default function Dashboard() {
 

  return (
    <div>
      <InfoCard />
      <ChartSection />



      <div>
        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Projects />
          </Grid>
          <Grid item xs={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
