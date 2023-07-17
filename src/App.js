import { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser= (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onAddUser={onAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
