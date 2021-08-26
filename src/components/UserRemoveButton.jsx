import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/users";

const UserRemoveButton = ({ id, deleting }) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={deleting ? "disabled" : ""}
      onClick={() => dispatch(deleteUser(id))}
    >
      ✕
    </button>
  );
};

export default UserRemoveButton;
