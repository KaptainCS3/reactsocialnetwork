import React from "react";
import "../assets/UserProfile.css";
import img from "../assets/icons8-gear-30.png";
const UserProfile = (props) => {
  console.log(props);
  const show = {
    display: props.isShow ? "block" : "none",
  };
  return (
    <section className="avatar__details" style={show}>
      <div className="avartar__container">
        <div className="user">
          <img src={img} alt="" />
          <span>User</span>
        </div>
        <hr className="hr" />
        <button className="btn__">See all profiles</button>
      </div>
      <div className="user__action">
        <div className="action__container">
          <div className="action__define">
            <div className="img__container">
              <img src={img} alt="" />
            </div>
            <p>Settings & privacy</p>
          </div>
          <button> {">"}</button>
        </div>
        <div className="action__container">
          <div className="action__define">
            <div className="img__container">
              <img src={img} alt="" />
            </div>
            <p>Help & Support</p>
          </div>
          <button>{">"}</button>
        </div>
        <div className="action__container">
          <div className="action__define">
            <div className="img__container">
              <img src={img} alt="" />
            </div>
            <p>Display & Accessibility</p>
          </div>
          <button className="icon__btn">{">"}</button>
        </div>
        <div className="action__container">
          <div className="action__define">
            <div className="img__container">
              <img src={img} alt="" />
            </div>
            <p>Give feedback</p>
          </div>
        </div>
        <div className="action__container">
          <div className="action__define">
            <div className="img__container">
              <img src={img} alt="" />
            </div>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
