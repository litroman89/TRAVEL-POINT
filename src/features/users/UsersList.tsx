import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "../../hooks/useHttp";

import { listAppearing } from "@/utils/appearing";

import "./usersList.scss";

const UsersList = () => {
  const [users, setUsers] = useState<any>([]);
  const { loading, request, error } = useHttp();

  useEffect(() => {
    async function fetchUsers() {
      const data = await request(import.meta.env.VITE_USERS_URL);

      setUsers(data);
    }

    fetchUsers();
  }, []);

  //додаємо анімацію
  useEffect(() => {
    listAppearing("li");
  });

  return (
    <>
      <h1>Users</h1>

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <Link to={`/${user.id}`}>Деталі</Link>
          </li>
        ))}
      </ul>
      {loading ? <p className="loading">Loading...</p> : null}
      {error ? <p>{error}</p> : null}
    </>
  );
};

export default UsersList;
