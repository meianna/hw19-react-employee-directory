import React from "react";
import { MDBDataTable } from "mdbreact";

const Table = (props) => {
  var columns = [
    {
      label: "Name",
      field: "name",
      sort: "asc",
      width: 200,
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
      width: 200,
    },
    {
      label: "Age",
      field: "age",
      sort: "asc",
      width: 200,
    },
    {
      label: "Phone Number",
      field: "phone",
      sort: "asc",
      width: 200,
    },
  ];
  let rows = props.employeeInfo;
  let data = {
    columns: columns,
    rows: rows,
  };
  return (
    <div>
      <MDBDataTable data={data}></MDBDataTable>
    </div>
  );
};

export default Table;
