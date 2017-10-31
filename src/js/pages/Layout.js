import React from "react";
import { Link } from "react-router-dom";


export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);

    // this.props.history.pushState(null, "/");

    // react-router v4
    this.props.history.push("/", null);
    // this.props.history.replace("/", null);       // back button wont work
  }
  render() {
    return (
      <div>
        <h1>Killer News.net</h1>
        {this.props.children}
        <Link to="archives">
          <button class="btn btn-success">Archives</button>
        </Link>
        <br/>
        <Link to="settings">
          <button class="btn btn-success">Settings</button>
        </Link>
        <br/>
        <button class="btn btn-success" onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
