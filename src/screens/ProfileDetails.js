import React from "react";
import { Link } from "react-router-dom";
import "../profile.css";

const ProfileDetails = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/main">
          <img
            src="https://www.pngitem.com/pimgs/m/78-781313_png-file-svg-back-arrow-icon-png-white.png"
            width="40"
            height="40"
            alt="mypic"
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
              <h2>Comments</h2>
            </li>
          </ul>
        </div>
      </nav>
      <div className="outer">
        <div className="inner_a">
          <img
            id="thoti"
            src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Imran_Ahmed_Khan_Niazi_-_UNGA_%2848784380531%29_%28cropped%29.jpg"
            height="180"
            width="200"
            alt=""
          />
        </div>
        <div id="inner_b">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <h3>13.7k</h3>
                <h5>Posts</h5>
              </div>
              <div class="col-sm">
                <h3>7.8M</h3>
                <h5>Followers</h5>
              </div>
              <div class="col-sm">
                <h3>1</h3>
                <h5>Followings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="a">
        <h3>Imran Khan</h3>
      </div>
      <div className="b">
        <h6>Politician</h6>
      </div>
      <div className="c">
        <p id="para">
          Chairman Pakistan Tereek e Insaf (@PTIOfficial) & former <br />
          Prime Minister of Islamic Republic of Pakistan.
          <br />
          floodrelief2022.punjab.gov.pk/
        </p>
      </div>
      <button id="btn">Message</button>
      <div className="photo">
        <div id="one">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSudKFCneqrqZ1O-Xr5LETUptP0dpRXwBhtxrEfAOWnTf5Ic99hJOCi7sZuDbxUrZO8dk&usqp=CAU"
            height="300"
            width="370"
            alt=""
          />
        </div>
        <div id="two">
          <img
            src="https://www.pakimag.com/files/2013/03/PTI-Imran-Khan-Jalsa-in-Lahore-23-3-2013-550x302.jpg"
            height="300"
            width="370"
            alt=""
          />
        </div>
        <div id="three">
          <img
            src="https://www.thenews.com.pk/assets/uploads/updates/2022-04-13/949923_7827946_Untitled-2_updates.jpg"
            height="300"
            width="370"
            alt=""
          />
        </div>
        <div id="four">
          <img
            src="https://images.indianexpress.com/2022/11/Imran-Khan.jpeg"
            height="300"
            width="370"
            alt=""
          />
        </div>
        <div id="five">
          <img
            src="https://media.vanityfair.com/photos/5d796648e8110d00099883d1/1:1/w_1333,h_1333,c_limit/t-Imran-Khan-1019.jpg"
            height="300"
            width="370"
            alt=""
          />
        </div>
        <div id="six">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2sCtDFLPYhnX90BoGNWHZOP8SYntMUm4nqlQ2obzAjqToaclKZwbSLFzzrwnXXtYu78&usqp=CAU"
            height="300"
            width="370"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
