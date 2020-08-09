import React from "react";
import axios from "axios";
import Table from "../components/Table.js";
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
            name: employee[i].name.first + " " + employee[i].name.last,
            email: employee[i].email,
            age: employee[i].dob.age,
            phone: employee[i].phone,
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
        <Table employeeInfo={this.state.employeeInfo}></Table>
      </div>
    );
  }
}

export default Home;
