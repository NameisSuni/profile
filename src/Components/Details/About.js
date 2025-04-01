import img from "../../Assets/my-image.jpg";
import { Card } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import Nav from "../Home/Navbar";
import CV from "../../Assets/Sunilkumar-resume.pdf";

function About() {
  return (
    <div className="background">
      <Nav />
      <h2 className="text-center fw-light fs-6 mt-5">Get to know me</h2>
      <h1 className="text-center fw-bold">About Me</h1>
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
      <div className="container mx-5">
        <div className="row">
          <div className="col-sm-4">
            <img src={img} alt="img" height={500} width={450}></img>
          </div>
          <div className="col-sm-8">
            <h3 className="fw-bold fs-1 my-4 mx-4">
              I'm Sunilkumar Namala, a Software engineer and Fullstack developer
            </h3>
            <p className="fw-light fs-5 mx-4">
              Experienced web developer with 1 year of experience in IT,
              specializing in creating responsive and user-friendly websites.
              Skilled in applying customer service principles to enhance user
              experience. Proven ability to collaborate with the
              cross-functional teams to deliver projects on time and to
              specifications.
            </p>
            <hr />
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="px-2 fw-bold mx-4">
                  Name:
                  <span className="px-3 fw-light">Sunilkumar Namala</span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="px-2 fw-bold">
                  Email:
                  <span className="px-3 fw-light">nameissuni@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="px-2 fw-bold mx-4">
                  Age:
                  <span className="px-3 fw-light">28</span>
                </p>
              </div>
              <div className="col-md-6">
                <p className="px-2 fw-bold">
                  From:
                  <span className="px-3 fw-light">Bengaluru, KA</span>
                </p>
              </div>
            </div>
            <div>
              <span className="mx-5">
                <a
                  href={CV}
                  download=""
                  className="btn btn-success rounded-pill px-4 py-2 fw-bold"
                >
                  Download CV
                </a>
                <span
                  className="mx-4"
                  style={{
                    whiteSpace: "pre",
                    textDecorationLine: "line-through",
                  }}
                >
                  {" "}
                </span>
                <a href="#0" className="mx-2">
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
                <a href="#0" className="mx-2">
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                </a>
                <a href="#0" className="mx-2">
                  <i className="fa-brands fa-twitter fa-lg"></i>
                </a>
                <a href="#0" className="mx-2">
                  <i className="fa-brands fa-instagram fa-lg"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h5 className="fw-light mt-5 mx-5">Services i offer to my clients</h5>
          <h1 className="fw-bold fs-1 mx-5 mb-4">My Services</h1>
          <div className="row">
            <div className="col-md-4">
              <Card
                icon={<i className="fa-brands fa-css3-alt icon"></i>}
                title="Design Trends"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
            <div className="col-md-4">
              <Card
                icon={<i className="fa-solid fa-images icon"></i>}
                title="PSD Trends"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
            <div className="col-md-4">
              <Card
                icon={<i className="fa-solid fa-compact-disc icon"></i>}
                title="Customer Support"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <Card
                icon={<i className="fa-brands fa-wordpress icon"></i>}
                title="Web Development"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
            <div className="col-md-4">
              <Card
                icon={<i className="fa-solid fa-up-down-left-right icon"></i>}
                title="Fully Responsive"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
            <div className="col-md-4">
              <Card
                icon={<i className="fa-solid fa-rocket icon"></i>}
                title="Branding"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                button="Go somewhere"
              />
            </div>
          </div>

          <div>
            <h5 className="fw-light mt-5 mx-5">
              What my clients think about me
            </h5>
            <h1 className="fw-bold fs-1 mx-5 mb-4">Testimonials</h1>
            <div>
              <div className="row">
                <div className="col-sm-6">
                  <Card2
                    title="Julia Sakura"
                    details="Envato Customer"
                    text="Emma did an excellent creative job, addressing our request quickly,
                            and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended."
                  />
                </div>
                <div className="col-sm-6">
                  <Card2
                    title="John Santana"
                    details="Entrepreneur"
                    text="Emma did an excellent creative job, addressing our request quickly,
                            and also providing her own graphic insight, being open to feedback and changes or edits when they arose. She worked with us the entire way. Highly recommended."
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5 className="fw-light mt-5 mx-5">Get started with my services</h5>
            <h1 className="fw-bold fs-1 mx-5 mb-4">Choose a Plan</h1>
            <div className="row">
              <div className="col-md-4">
                <Card3
                  icon={<i className="fa-solid fa-egg my-4 icon"></i>}
                  title="Standard"
                  text="$19/month"
                  button="Get Standard"
                  li1="Mobile App Design"
                  li2="Responsive Design"
                  li3="Database Development"
                  li4="Web Design"
                  li5="24/7 Support"
                />
              </div>
              <div className="col-md-4">
                <Card3
                  icon={<i className="fa-solid fa-rocket my-4 icon"></i>}
                  title="Professional"
                  text="$29/month"
                  button="Get Pro"
                  li1="Mobile App Design"
                  li2="Responsive Design"
                  li3="Database Development"
                  li4="Web Design"
                  li5="24/7 Support"
                />
              </div>
              <div className="col-md-4">
                <Card3
                  icon={<i className="fa-solid fa-compact-disc my-4 icon"></i>}
                  title="Business"
                  text="$39/month"
                  button="Get Business"
                  li1="Mobile App Design"
                  li2="Responsive Design"
                  li3="Database Development"
                  li4="Web Design"
                  li5="24/7 Support"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
