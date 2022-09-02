import React from "react";
import Header from "../header/header";
import { SLayout } from "./layout.style";

function Layout({ children }) {
  return (
    <SLayout>
      <div className="side-bar">222222222222222222222</div>

      <div className="main-content-wrapper">
        <div className="main-content">
          <Header />

          <div>{children}</div>

          <footer>
            this is footer
          </footer>
        </div>
      </div>
    </SLayout>
  );
}

export default Layout;
