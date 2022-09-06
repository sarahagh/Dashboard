import styled from "@emotion/styled";

export const SLayout = styled.div`
  .side-bar {
    width: 240px;
    height: calc(100vh - 48px);
    position: fixed;
    top: 24px;
    left: 24px;
    border-radius: 12px;
    background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));

    .weather-section {
      color: #fff;
      text-align: center;
      font-size: 18px;
    }

    h1 {
      font-size: 16px;
      text-align: center;
      padding-top: 30px;
      color: #fff;
    }

    hr {
      flex-shrink: 0;
      border-top: 0px solid rgba(250, 250, 250, 0.12);
      border-right: 0px solid rgba(250, 250, 250, 0.12);
      border-left: 0px solid rgba(250, 250, 250, 0.12);
      background-color: transparent;
      height: 0.0625rem;
      margin: 1rem 0px;
      border-bottom: none;
      opacity: 0.25;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0),
        #fff,
        hsla(0, 0%, 100%, 0)
      ) !important;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      padding: 20px;
      .selected-item {
        background: linear-gradient(
          195deg,
          rgb(73, 163, 241),
          rgb(26, 115, 232)
        );
      }
      li {
        font-size: 14px;
        text-align: left;
        padding: 15px;
        color: #fff;
        border-radius: 5px;
        margin-bottom: 5px;
        cursor: pointer;
      }
      li:hover {
        background-color: #666;
      }
    }
  }

  .main-content-wrapper {
    padding-left: 240px;
  }

  .main-content {
    padding: 24px;
  }
`;
