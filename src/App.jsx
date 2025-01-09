import React, { useState } from 'react';
import Users from './Users';
import UsersForm from './UsersForm';
import EditUsersForm from './EditUsersForm';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', gen: 12 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', gen: 8 },
    { id: 3, name: 'Emily Johnson', email: 'emily@example.com', gen: 5 },
  ]);

  const [editingUser, setEditingUser] = useState(null); 
  
  const handleAddUser = (newUser) => {
    setUsers([...users, { id: Date.now(), ...newUser }]);
  };

  
  const handleEditUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null); 
  };

  
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        User Management App
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <UsersForm handleAddUser={handleAddUser} />
        </div>
        <div className="w-full md:w-2/3">
          <Users
            users={users}
            handleDeleteUser={handleDeleteUser}
            setEditingUser={setEditingUser} 
          />
        </div>
      </div>

      
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <EditUsersForm
              user={editingUser}
              handleEditUser={handleEditUser}
              closeModal={() => setEditingUser(null)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
