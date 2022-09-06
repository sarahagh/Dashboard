import styled from "@emotion/styled";

export const SInfoCard = styled.div`
  padding-top: 30px;
  .info-card-item {
    width: 100%;
    height: 120px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
      rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
    position: relative;
    padding: 8px 16px;

    .info-card-item-icon-wrapper {
      width: 60px;
      height: 60px;
      background-color: blue;
      border-radius: 12px;
      position: absolute;
      left: 20px;
      top: -20px;
      background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: #fff;
        fill: #fff;
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

    p{
        text-align: right;
        color: #888;
        margin-bottom: 8px;
    }
    h4{
        text-align: right;
        font-size: 22px;
    }

    span{
        color: #888;

        b{
            color: green;
        }
    }
  }
`;
