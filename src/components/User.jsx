import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/features/users";
import UserRemoveButton from "./UserRemoveButton";

const User = () => {
  const users = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  if (loading) return <div>Идет загрузка...</div>;
  return users.map((e) => {
    return (
      <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>
          <UserRemoveButton deleting={e.deleting} id={e.id} />
        </td>
      </tr>
    );
  });
};

export default User;
