import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="card-columns overflow-auto mt-3 mb-3 ml-3 mr-4">
          <div className="card bg-light border border-primary">
            <div className="card-body text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Covid-19 Tracking System</h5>
                  <p className="card-text">
                    It is a React Application that use digital contact tracing
                    in response to the Covid-19-Pandemic
                  </p>
                  <a
                    href="https://github.com/kumar342/Covid-19.git"
                    className="btn btn-primary mr-3"
                  >
                    View Source
                  </a>
                  &nbsp;
                  <a
                    href="https://covid-19-tracking-hk.netlify.app/"
                    className="stretched-link"
                  >
                    Visit web
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-light border border-primary">
            <div className="card-body text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">A React-app-Editable-Table</h5>
                  <p className="card-text">
                    A web application where an user can login via Google. After
                    the user login, user can update his details
                  </p>
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/React-app-Editable-Table.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://editable-table-using-react.netlify.app/">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Visit Web
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-light border border-primary">
            <div className="card-body text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">A React-app-Random-Dog-image</h5>
                  <p className="card-text">
                    A simple React app which shows the list of all breeds from
                    the dog.ceo API and also a detail page which shows a random
                    image for the picked dog (from the list).
                  </p>
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/random-dogs-image-list-using-react.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>
                  &nbsp;
                  <button type="button" className="btn btn-outline-primary">
                    <a href="https://random-dogs-image.netlify.app">
                      <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                      Visit Web
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-light border border-primary">
            <div className="card-body text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Login system</h5>
                  <p className="card-text">
                    An Application build a full stack login/Authentication using
                    MERN Stack
                  </p>
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/login-system.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-light border border-primary">
            <div className="card-body text-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Node Application</h5>
                  <p className="card-text">
                    An Application build with Node js and deployed by using AWS
                  </p>
                  <button type="button" className="btn btn-outline-dark mr-2">
                    {" "}
                    <a href="https://github.com/kumar342/Node_project_0320.git">
                      <i className="fa fa-github" aria-hidden="true"></i> View
                      Source
                    </a>
                  </button>
                  <a href="http://18.188.18.78/">
                    <i className="fa fa-globe mr-1" aria-hidden="true"></i>
                    18.188.18.78
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
