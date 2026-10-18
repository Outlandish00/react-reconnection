// Requirements:
// - Fetch users when the component first mounts.
// - Show a loading message while the request is pending.
// - Display each user's name and email after the data arrives.
// - Show an error message if the request fails.

import { useEffect, useState } from "react";
import { getUsers } from "../practice/javascript/04-fetching-data";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res))
      .catch((err) => {
        setError(err.status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  while (isLoading) {
    return <>loading users.....</>;
  }
  if (error != "") {
    return <>There's an error retrieving users.</>;
  }
  return users.map((user) => {
    return (
      <div key={user.id}>
        User's name: {user.name}
        User's Email: {user.email}
      </div>
    );
  });
};
