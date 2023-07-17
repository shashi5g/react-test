import { useState } from 'react';

function UserForm({ onAddUser }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddUser({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input  id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UserForm;
