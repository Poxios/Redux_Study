import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, getPosts } from "../redux";

function UsersContainer() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const postsData = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(getPosts());
  }, [dispatch]);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
      <button
        onClick={() => {
          console.log(postsData);
        }}>
        asdf
      </button>
    </div>
  );
}

export default UsersContainer;
