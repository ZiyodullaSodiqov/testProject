import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <React.Fragment>
      <div className="site-hero-nav">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link to="/">
                <img
                  className="site-lang-X"
                  src="https://www.samdu.uz/upload/cover-images/61312fa1aa6d7-61312fa1aa6d8-61312fa1aa6d9-61312fa1aa6da.jpg"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
