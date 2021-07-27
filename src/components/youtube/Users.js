import React from "react";
import "../youtube/Users.css";
import Navbar from "../navbar/Navbar";
import Footer from "../youtube/Footer";

const Users = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="ucontainer-main">
        <div className="ucontainer">
          <div className="one">
            <figure className="back">
              <h3>Akash</h3>
              <i class="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt="One"
            />
          </div>

          <div className="two">
            <figure className="back">
              <h3>Chitransh</h3>
              <i class="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/363e3e33850498.56ba69ac3183c.png"
              alt="Two"
            />
          </div>

          <div className="three">
            <figure className="back">
              <h3>Harshit</h3>
              <i class="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f9fa8a33850498.56ba69ac2cc3a.png"
              alt="Three"
            />
          </div>

          <div className="four">
            <figure className="back">
              <h3>Sanskaar</h3>
              <i class="fas fa-sign-in-alt"></i>
            </figure>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png"
              alt="four"
            />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Users;
