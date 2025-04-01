import Nav from "../Home/Navbar";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tl339yj",
        "template_purz08s",
        e.target,
        "qY4xxBbou7w6LbWwr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Successful");
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Nav />
      <div className="background">
        <h2 className="text-center fw-light fs-6 mt-5">
          Feel free to contact me anytime
        </h2>
        <h1 className="text-center fw-bold">Get in Touch</h1>
        <div className="progress mx-auto" style={{ width: "160px" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="row" style={{ marginInlineEnd: "100px" }}>
          <div className="col-12 col-md-7">
            <form
              className="form mt-4 mb-5"
              onSubmit={sendEmail}
              autoComplete="off"
            >
              <h4 className="fs-2 fw-bold mb-4">Message Me</h4>
              <div className="row g-3">
                <div className="col-12 col-md-6 mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="col-12 mb-1">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control"
                    name="subject"
                    value={subject}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="col-12"></div>
                <textarea
                  placeholder="Message"
                  className="form-control ms-2"
                  style={{ height: "150px", width: "630px" }}
                  name="message"
                  value={message}
                  onChange={changeHandler}
                  required
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success rounded-pill mx-3 px-4 py-2 fw-bold mt-3"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-5 mt-4">
            <h4 className="fs-2 fw-bold">Contact Info</h4>
            <p className="fw-light fs-5">
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
            <ul className="list-unstyled margin">
              <li>
                <div className="hstack gap-4">
                  <div>
                    <i className="fa-solid fa-compact-disc fa-xl"></i>
                  </div>
                  <div className="vr"></div>
                  <div className="mb-4">
                    <h6>Name</h6>
                    <span className="fw-light">Sunilkumar Namala</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="hstack gap-4">
                  <div>
                    <i className="fa-solid fa-earth-americas fa-xl"></i>
                  </div>
                  <div className="vr"></div>
                  <div className="mb-4">
                    <h6>Location</h6>
                    <span className="fw-light">
                      Bengaluru, Karnataka, India.
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="hstack gap-4">
                  <div>
                    <i className="fa-solid fa-phone fa-xl"></i>
                  </div>
                  <div className="vr"></div>
                  <div className="mb-4">
                    <h6>Call Me</h6>
                    <span className="fw-light">+91 9886068988</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="hstack gap-4">
                  <div>
                    <i className="fa-solid fa-envelope fa-xl"></i>
                  </div>
                  <div className="vr"></div>
                  <div>
                    <h6>Email Me</h6>
                    <span className="fw-light">nameissuni@gmail.com</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
