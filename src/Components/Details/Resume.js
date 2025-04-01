import Nav from "../Home/Navbar";
import { Part } from "./Part";
import video from "../../Assets/edu-video.mp4";

export function Resume() {
  return (
    <div>
      <div className="background">
        <Nav />
        <h2 className="text-center fw-light fs-6 mt-5">Check out my Resume</h2>
        <h1 className="text-center fw-bold">Resume</h1>
        <div class="progress mx-auto" style={{ width: "160px" }}>
          <div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "100%" }}
          ></div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-12 mb-5">
              <h3 className="mb-2">Experience</h3>
              <Part
                title="Software Engineer"
                details="AVADHUTA TECHNOLOGIES "
                pass="2023 - 2024"
                text={
                  <li>
                    Developed and optimized 10+ responsive websites, improving
                    user engagement by 25% and reducing page load times by 35%
                    using React, TypeScript, and performance optimization
                    techniques.
                  </li>
                }
                text1={
                  <li>
                    Integrated RESTful APIs and dynamic, data-driven components,
                    enhancing frontend-backend communication and reducing API
                    response times by 30%, leading to a more seamless user
                    experience.
                  </li>
                }
                text2={
                  <li>
                    Implemented version control and collaborative workflows
                    using Git/GitHub, reducing code conflicts by 30% and
                    improving team efficiency in Agile development environments.
                  </li>
                }
                text3={
                  <li>
                    Utilized TypeScript for enhanced code quality, reducing bugs
                    and improving development efficiency by 15%, ensuring robust
                    and scalable frontend applications.
                  </li>
                }
              />
              <Part
                title="Senior Consultant Quality"
                details="HINDUJA GLOBAL SOLUTIONS"
                pass="2019 - 2023"
                text={
                  <li>
                    Evaluate samples using randomizer and deliver timely and
                    accurate feedback to the consultants.
                  </li>
                }
                text1={
                  <li>
                    Perform RCA and implement action plans to address the
                    defects and errors.
                  </li>
                }
              />
              {/* <Part
                text={
                  <li>
                    Coordinating with the client on process related issues and
                    updates post which Conducting team reviews and huddles.
                  </li>
                }
                text1={
                  <li className="pb-2">
                    Create and review procedures, checklists and job aids.
                  </li>
                }
              /> */}
            </div>
            <div className="col-sm-12">
              <h3 className="mb-2">Education</h3>
              <Part
                title="Executive MBA - IT"
                details="Dayananda Sagar University"
                description="2022 - 2023"
              />
              <Part
                title="Bachelor of Commerce"
                details="Vijayanagara SriKrishnadevaraya University"
                description="2015 - 2018"
              />
              {/* <Part
                title="Higher Secondary School"
                details="Delhi University"
                description="2013 - 2015"
              /> */}
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h5 className="fw-light fs-3 mb-3">
            My level of knowledge in some tools
          </h5>
          <h1 className="fw-bold fs-1 mb-5">My Skills</h1>
          <div className="row">
            <div className="col-sm-6">
              <span className="fs-5">HTML/CSS</span>
              <span className="fs-5 float-end">95%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="fs-5">Web Design</span>
              <span className="fs-5 float-end">80%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="fs-5">JavaScript</span>
              <span className="fs-5 float-end">90%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-6">
              <span className="fs-5">React JS</span>
              <span className="fs-5 float-end">90%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="fs-5">Express JS</span>
              <span className="fs-5 float-end">95%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <span className="fs-5">Node JS</span>
              <span className="fs-5 float-end">80%</span>
              <div class="progress my-2">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="p-2">Take a tour of my office</h2>
              <p className="p-2 fs-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                cum quasi assumenda culpa praesentium consectetur voluptatibus
                expedita. Voluptatem tempore, aspernatur rem facilis, distinctio
                nemo! Odio velit, nemo dolorem voluptas!
              </p>
              <p className="p-2 fs-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium qui aspernatur unde mollitia, in laborum.
              </p>
            </div>
            <div className="col-sm-6">
              <video
                src={video}
                alt="video"
                controls
                style={{ maxHeight: "30rem", maxWidth: "40rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
