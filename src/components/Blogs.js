import React, { Component } from "react";

export default class Blogs extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="public/assets/Capture.png"
            width="40%"
            height="40%"
            alt="blog"
          />
          <a href="https://medium.com/@hemanth2gundala/performing-curd-operations-using-nodejs-90752aa959dc">
            Click me
          </a>
        </div>
        <div>
          <img
            src="public/assets/blogaws.png"
            width="40%"
            height="40%"
            alt="blog"
          />
          <a href="https://medium.com/@hemanth2gundala/how-to-add-storage-or-volume-to-remote-server-in-aws-112a10c06877">
            Click me
          </a>
        </div>
        <div>
          <img
            src="public/assets/node-aws.png"
            width="40%"
            height="40%"
            alt="blog"
          />
          <a href="https://medium.com/@hemanth2gundala/how-to-deploy-node-application-on-aws-be60b0e508e4">
            Click me
          </a>
        </div>
      </div>
    );
  }
}
