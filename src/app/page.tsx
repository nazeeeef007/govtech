'use client';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
}

export default function UserForm() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Bravo' },
    { id: 3, name: 'Charlie' }
  ]);

  const [newUser, setNewUser] = useState({ name: '' });

  const updateUser = (id: number, newName: string) => {
    setUsers(users.map(user => user.id === id ? { ...user, name: newName } : user));
  };

  const addUser = () => {
    if (newUser.name.trim() === '') return;
    setUsers([...users, { id: Date.now(), name: newUser.name }]);
    setNewUser({ name: '' });
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold">Add User</h3>
      <div className="flex space-x-2">
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ name: e.target.value })}
          placeholder="New user name"
          className="border p-2 rounded"
        />
        <button onClick={addUser} className="bg-blue-500 text-white px-3 py-2 rounded">
          Add User
        </button>
      </div>
      <h3 className="mt-5 text-lg font-bold">List of Users</h3>
      {users.map(user => (
        <div key={user.id} className="flex space-x-2 mt-2">
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateUser(user.id, e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-2 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
