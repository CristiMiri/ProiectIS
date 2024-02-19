import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Admin } from "../models/admin";

interface AdminTableProps {
  admins: Admin[];
}

const AdminTable: React.FC<AdminTableProps> = ({ admins }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Admin Code</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {admins.map((admin) => (
          <tr key={admin.id}>
            <td>{admin.id}</td>
            <td>{admin.username}</td>
            <td>{admin.email}</td>
            <td>{admin.adminCode}</td>
            <td>{admin.role}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AdminTable;
