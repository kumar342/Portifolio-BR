import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="mt-5 mb-5">
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Hemanth Kumar</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>MERN Stack developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>hemanth2gundala@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Git: </span>
                            <span>
                              <a>https://github.com/kumar342</a>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      <span>JavaScript</span>{" "}
                      <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>React & Redux</span>{" "}
                      <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>Node & Express</span>{" "}
                      <span className="pull-right">60%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>MongoDB</span>{" "}
                      <span className="pull-right">80%</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>AWS</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
