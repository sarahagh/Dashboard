import styled from "@emotion/styled";

export const SChartSection = styled.div`
  padding-top: 50px;
  .chart-box {
    position: relative;

    background-color: #fff;
    display: flex;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    padding-top: 190px;

    .chart-box-body {
      padding: 16px;
      width: 100%;
      text-align: left;
      p {
        text-align: left;
        color: #777;
      }
      h3 {
        text-align: left;
      }

      span {
        text-align: left;
        color: #777;

        svg {
          width: 16px;
          vertical-align: -4px;
        }
      }

      hr {
        flex-shrink: 0;
        border-top: 0px solid rgba(0, 0, 0, 0.12);
        border-right: 0px solid rgba(0, 0, 0, 0.12);
        border-left: 0px solid rgba(0, 0, 0, 0.12);
        background-color: transparent;
        height: 0.0625rem;
        margin: 1rem 0px;
        border-bottom: none;
        opacity: 0.25;
        background-image: linear-gradient(
          to right,
          rgba(52, 71, 103, 0),
          rgba(52, 71, 103, 0.4),
          rgba(52, 71, 103, 0)
        ) !important;
      }
    }

    .chart-wrapper {
      position: absolute;
      background: linear-gradient(195deg, #66bb6a, #43a047);
      display: inline-block;
      width: 85%;
      border-radius: 12px;
      height: 180px;
      padding: 20px 8px;
      top: -25px;

      svg {
        position: relative;
        left: -8px;
      }
    }
  }
`;
