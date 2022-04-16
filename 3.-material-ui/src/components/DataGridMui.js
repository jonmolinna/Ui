import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

// 1. colums: Table header
// 2. rows: Table body

// const cols = [
//   { field: "studentName", headerName: "Studens", width: 200 },
//   { field: "studentScore", headerName: "Score", width: 200 },
//   { field: "studentAge", headerName: "Age", width: 200 },
// ];

const cols = [
  { field: "name", headerName: "name", width: 200 },
  { field: "email", headerName: "emai", width: 200 },
  { field: "phone", headerName: "phone", width: 200 },
  { field: "website", headerName: "website", width: 200 },
  { field: "company", headerName: "company", width: 200 },
];

// const rows = [
//   { id: 1, studentName: "Jane", studentScore: 90, studentAge: 27 },
//   { id: 2, studentName: "Kendra", studentScore: 70, studentAge: 26 },
//   { id: 3, studentName: "Dallas", studentScore: 80, studentAge: 25 },
//   { id: 4, studentName: "Hannah", studentScore: 30, studentAge: 22 },
//   { id: 5, studentName: "Elon", studentScore: 100, studentAge: 20 },
// ];

const DataGridMui = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  // trim the data and grab what we want
  const rowData = users?.map((user) => {
    return {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      id: user?.id,
      website: user.website,
      company: user?.company?.name,
    };
  });

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        checkboxSelection
        autoHeight
        pageSize={3}
        rows={rowData}
        columns={cols}
      />
    </div>
  );
};

export default DataGridMui;
