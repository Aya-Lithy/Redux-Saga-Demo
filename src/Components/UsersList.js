import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as UsersCreators } from "../redux/user/userActions";

const UsersList = () => {
  const users = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(UsersCreators.getUsersRequest());
  }, [dispatch]);
  console.log(users);
  return (
    <div>
      {users.isLoading ? (
        <h2>Loading</h2>
      ) : users.isError ? (
        <h2>{users.error}</h2>
      ) : (
        <div>
          <h2>Users</h2>
          <div>
            {users &&
              users.usersInfo &&
              users.usersInfo.map((user) => <li key={user.id}>{user.name}</li>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
