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
    <div className="absolute top-4 left-4 max-w-md p-5 border rounded-lg shadow-md font-sans text-xs font-normal">
      <h3 className="text-lg mb-[10px]">Name</h3>
      <div className="flex space-x-[10px] mb-[10px]">
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ name: e.target.value })}
          placeholder="New user name"
          className="border p-2 rounded h-10 w-full" 
          style={{ borderRadius: '8px' }}
        />
        <button
          onClick={addUser}
          className=" text-black px-3 py-2 rounded h-10"
          style={{ backgroundColor: '#7CB9E8', borderRadius: '8px' }}
        >
          Add
        </button>
      </div>
      <h3 className="text-lg mt-[20px] mb-[10px]">List of users</h3>
      {users.map(user => (
        <div key={user.id} className="flex space-x-[10px] mt-[10px] w-full h-10">
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateUser(user.id, e.target.value)}
            className="border p-2 rounded w-full" 
            style={{ borderRadius: '8px' }}
          />
          <button
            onClick={() => deleteUser(user.id)}
            className="bg-red-500 text-black px-3 py-2 rounded h-10"
            style={{ borderRadius: '8px' }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
  
}
