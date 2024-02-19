// UserPage.tsx
import React, { useEffect } from "react";
import UserForm from "../components/Forms/UserForm";
import { User } from "../models/user";
import { getUserById, updateUser, deleteUser } from "../api/UserService";

const UserPage: React.FC = () => {
  const [userData, setUserData] = React.useState<User>({
    id: 0,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  useEffect(() => {
    getUserById(1).then((user) => {
      setUserData(user);
    });
  }, []);

  const handleSave = (user: User) => {
    var newUser = { ...user };
    setUserData(newUser);
    console.log(newUser);
    updateUser(newUser.id, newUser);
  };

  const handleDelete = (user: User) => {
    var newUser = { ...user };
    setUserData(newUser);
    deleteUser(newUser.id);
    deleteUser(newUser.id);
  };

  return (
    <div className="container">
      <h2>User Profile</h2>
      <UserForm
        user={userData}
        onSave={(userData: User) => handleSave(userData)}
        onDelete={(userData: User) => handleDelete(userData)}
      />
    </div>
  );
};

export default UserPage;
