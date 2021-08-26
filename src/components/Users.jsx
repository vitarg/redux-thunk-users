import React, { useEffect } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../redux/features/users";

const Users = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Логин</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        <User />
      </tbody>
    </table>
  );
};

export default Users;
