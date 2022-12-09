import React from "react";
import { Link } from "react-router-dom";

const PostComments = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/main">
          <img
            src="https://www.pngitem.com/pimgs/m/78-781313_png-file-svg-back-arrow-icon-png-white.png"
            width="40"
            height="40"
            alt=""
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <h2>imranKhan.pti</h2>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default PostComments;
