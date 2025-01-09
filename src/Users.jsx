import React from 'react';

const Users = ({ users, handleDeleteUser, setEditingUser }) => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
        >
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Gen: {user.gen}</p>
          <div className="mt-3">
            <button
              onClick={() => setEditingUser(user)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
