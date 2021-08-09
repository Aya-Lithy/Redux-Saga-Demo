//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function Users() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(fetchUsers());
  }, []);*/

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Get Users
      </button>
      <div>
        {user.loading ? (
          <h2>Loading</h2>
        ) : user.error ? (
          <h2>{user.error}</h2>
        ) : (
          <div>
            <h2>Users</h2>
            <div>
              {user &&
                user.users &&
                user.users.map((user) => <li>{user.name}</li>)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
