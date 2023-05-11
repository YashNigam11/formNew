import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Datasheet.css";

export default function Datasheet() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/user");
      console.log(result.data);
      setUsers(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="dataTables_wrapper">
      <h2 className="users">USER DETAILS</h2>

      <table id="usersTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.sex}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
