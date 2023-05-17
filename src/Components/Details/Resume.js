import Nav from "../Home/Navbar";
import { Part } from './Part';
import video from '../../Assets/edu-video.mp4';

export function Resume() {
    return (
        <div>
            <div className='background'>
                <Nav />
                <h2 className='text-center fw-light fs-6 mt-5'>Check out my Resume</h2>
                <h1 className='text-center fw-bold'>Resume</h1>
                <div class="progress mx-auto" style={{ width: "160px" }}>
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "100%" }}></div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="mb-2">Education</h3>
                            <Part title="Executive MBA - IT" details="Dayananda Sagar University" discription="2022 - Present" />
                            <Part title="Bachelor of Commerce" details="Vijayanagara Sri
                                Krishnadevaraya University" discription="2015 - 2018" />
                            <Part title="Higher Secondary School" details="Delhi University" discription="2013 - 2015" />
                        </div>
                        <div className="col-sm-6">
                            <h3 className="mb-2">Experience</h3>
                            <Part title="Senior Consultant Quality" details="Hinduja Global Solutions" pass="2019 - Present"
                                text={<li>Evaluate samples using randomizer and deliver timely and accurate
                                    feedback to the consultants.</li>} text1={<li>Perform Root Cause Analysis and implement action plans to address
                                        the defects and errors.</li>} />
                            <Part text={<li>Participating in calibration to ensure quality
                                Training and Operation team are in same terms for the process.</li>} text1={<li>Collaborating with training team and conducting Weekly/Monthly
                                    Product Assessment on process updates and top error trends.</li>} />
                            <Part text={<li>Coordinating with the client on process related issues and updates
                                post which Conducting team reviews and huddles.</li>} text1={<li className="pb-2">Create and review procedures, checklists and job aids.</li>} />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h5 className="fw-light fs-3 mb-3">My level of knowledge in some tools</h5>
                    <h1 className="fw-bold fs-1 mb-5">My Skills</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <span className="fs-5">HTML/CSS</span>
                            <span className="fs-5 float-end">95%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="fs-5">Web Design</span>
                            <span className="fs-5 float-end">80%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="fs-5">JavaScript</span>
                            <span className="fs-5 float-end">90%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <span className="fs-5">React JS</span>
                            <span className="fs-5 float-end">90%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="fs-5">Express JS</span>
                            <span className="fs-5 float-end">95%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span className="fs-5">Node JS</span>
                            <span className="fs-5 float-end">80%</span>
                            <div class="progress my-2">
                                <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2 className="p-2">Take a tour of my office</h2>
                            <p className="p-2 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita.
                                Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem voluptas!
                            </p>
                            <p className="p-2 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laudantium qui aspernatur unde mollitia, in laborum.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <video src={video} alt="video" controls style={{ maxHeight: "30rem", maxWidth: "40rem" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}