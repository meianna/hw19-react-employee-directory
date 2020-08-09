import React from "react";
import axios from "axios";
class Home extends React.Component {
  state = {};
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((employeeRecord) => {
        console.log(employeeRecord);
      });
  };
  render() {
    return (
      <div>
        <header className="jumbotron">
          <h1>Employee Directory</h1>
        </header>
      </div>
    );
  }
}

export default Home;
