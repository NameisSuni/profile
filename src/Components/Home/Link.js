import { Component } from "react";

export class Link extends Component {
  render() {
    return (
      <div>
        <div className="link">
          <ul className="list-unstyled">
            {/* <li className='mb-2'><a href="#0"><i className="fa-brands fa-facebook fa-xl"></i></a></li> */}
            <li className="mb-2">
              <a href="#0">
                <i className="fa-brands fa-github fa-xl"></i>
              </a>
            </li>
            <li className="mb-2">
              <a href="#0">
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </a>
            </li>
            <li className="mb-2">
              <a href="#0">
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
            </li>
            <li className="mb-2">
              <a href="#0">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
