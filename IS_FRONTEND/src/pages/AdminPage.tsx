import React from "react";
import AdminTable from "../components/AdminTable";
import { admins } from "../models/dummys";

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Management</h2>
      <AdminTable admins={admins} />
    </div>
  );
};

export default AdminPage;
