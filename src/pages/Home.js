import React from "react";
import axios from "axios";
class Home extends React.Component {
  state = {
    employeeInfo: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((employeeRecord) => {
        console.log(employeeRecord);
        var employee = employeeRecord.data.results;
        let employeeInfo = [];
        for (let i = 0; i < employee.length; i++) {
          let record = {
            name: employee[i].name.first + employee[i].name.last,
            email: employee[i].email,
            dob: employee[i].dob,
            phone: employee[i].cell,
          };
          employeeInfo.push(record);
        }
        this.setState({
          employeeInfo: employeeInfo,
        });
        console.log(this.state.employeeInfo);
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
