import React from "react";
import img1 from "../../styles/img/image-qr-code.png";

const Qrcode = () => {
  return (
    <div className="qr-code-component">
      <div className="main-box">
        <div className="img-box">
          <img src={img1} alt="" />
        </div>
        <div className="information">
          <p>
            Improve your front-end
            <br /> skills by building projects
          </p>
          <small>
            Scan the QR code to visit Frontend
            <br /> Mentor and take your codeing skills to
            <br /> the next level
          </small>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
