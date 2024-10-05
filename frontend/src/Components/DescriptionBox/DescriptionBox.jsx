import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
      <p>
        Welcome to <strong>Virtuwear</strong>, your ultimate destination for a seamless and personalized clothing shopping experience. Whether you're looking to explore the latest fashion trends or discover unique styles, Virtuwear offers a wide variety of dresses just a click away. With our easy-to-use platform, you can add your favorite items to the cart, manage them effortlessly, and enjoy a hassle-free checkout process.
      </p>
      <p>
        What sets Virtuwear apart is our innovative <strong>"Try This Dress"</strong> feature. Simply upload a front-facing picture, select the outfit that catches your eye, and see yourself in the dress with a stunning 3D model that shows the fit and design in real time. No more guessing – try before you buy!
      </p>
      <p>
        Join us today by signing up or logging in to unlock a world of fashionable possibilities, curated just for you. At Virtuwear, we make shopping not only convenient but also fun and interactive.
      </p>
    </div>

    </div>
  );
};

export default DescriptionBox;
