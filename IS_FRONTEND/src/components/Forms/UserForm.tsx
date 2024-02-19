// UserForm.tsx
import React from "react";
import { User } from "../../models/user";
import { on } from "events";

interface UserFormProps {
  user: User;
  onSave: (user: User) => void;
  onDelete: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({
  user,
  onDelete,
  onSave,
}: UserFormProps) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          defaultValue={user.username}
          readOnly
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue={user.email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          defaultValue={user.firstName}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          defaultValue={user.lastName}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            onSave(user);
          }}
        >
          Update Profile
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(user)}
        >
          Delete Account
        </button>
      </div>
    </form>
  );
};

export default UserForm;
