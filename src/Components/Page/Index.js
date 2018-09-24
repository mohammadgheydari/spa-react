import React, { Component } from "react";
import axios from "axios";
import ReactHtml from "raw-html-react";
import { Route } from "react-router-dom";
import "../Shared/_API";
import "./page.css";

class Pages extends Component {
  Call() {
    const title = this.props.match.params.title,
      self = this;
    axios({
      method: "get",
      url: 'UIPage/?value="' + title + '"'
    })
      .then(function(res) {
        const Response = res.data.Pgc_Body;
        self.setState({ pageContent: Response });
        console.log(self.state.pageContent);
      })
      .catch(function(error) {
        console.log(error);
        self.setState({ pageContent: "خطایی رخ داده است" });
        // this.props.history.push("/error");
      });
  }
  state = {
    pageContent: ""
  };
  constructor(props) {
    super(props);
    this.Call();
    //Here ya go
    this.props.history.listen((location, action) => {
      console.log(location.pathname);

      if (location.pathname.includes("page")) {
        this.Call();
      }
    });
  }

  render() {
    return (
      <div>
        <ReactHtml html={this.state.pageContent} />
      </div>
    );
  }
}

export default Pages;
