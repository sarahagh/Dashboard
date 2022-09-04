import { Grid } from "@mui/material";
import React from "react";
import { SChartSection } from "./chartSection.style";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const data = [
  {
    name: "Apr",
    uv: 20,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "May",
    uv: 10,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jun",
    uv: 300,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Jul",
    uv: 350,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Aug",
    uv: 450,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sep",
    uv: 380,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Oct",
    uv: 200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 220,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 550,
    pv: 4300,
    amt: 2100,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
function ChartSection() {
  return (
    <SChartSection>
      <Grid container spacing={8}>
        <Grid item xs={4}>
          <div className="chart-box">
            <div className="chart-box-body">
              <h3>Website Views</h3>
              <p> Last Campaign Performance</p>
              <hr />
              <span>
                {" "}
                <AccessTimeIcon fontSize="small" /> campaign sent 2 days ago
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                boxShadow:
                  "0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(233,30,99,.4)!important ",
              }}
              className="chart-wrapper"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={600} height={300} data={data} barSize={5}>
                  <XAxis dataKey="name" stroke="#eee" strokeDasharray="3 3" />
                  <YAxis stroke="#eee" strokeDasharray="3 3" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="pv" fill="#fff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="chart-box">
            <div className="chart-box-body">
              <h3>Website Views</h3>
              <p> Last Campaign Performance</p>
              <hr />
              <span>
                {" "}
                <AccessTimeIcon fontSize="small" /> campaign sent 2 days ago
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(195deg,#66bb6a,#43a047)",
              }}
              className="chart-wrapper"
            >
              <ResponsiveContainer width="100%" minHeight={200}>
                <LineChart width={600} height={300} data={data}>
                  <Line dataKey="uv" stroke="#ffffff" strokeWidth="4px" />
                  <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#eee" strokeDasharray="3 3" />
                  <YAxis stroke="#eee" strokeDasharray="3 3" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="chart-box">
            <div className="chart-box-body">
              <h3>Website Views</h3>
              <p> Last Campaign Performance</p>
              <hr />
              <span>
                {" "}
                <AccessTimeIcon fontSize="small" /> campaign sent 2 days ago
              </span>
            </div>
            <div
              style={{
                background: "linear-gradient(195deg,#42424a,#191919)",
              }}
              className="chart-wrapper"
            >
              <ResponsiveContainer width="100%" minHeight={200}>
                <LineChart width={600} height={300} data={data}>
                  <Line dataKey="uv" stroke="#ffffff" strokeWidth="4px" />
                  <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                  <XAxis dataKey="name" stroke="#eee" strokeDasharray="3 3" />
                  <YAxis stroke="#eee" strokeDasharray="3 3" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </SChartSection>
  );
}

export default ChartSection;
