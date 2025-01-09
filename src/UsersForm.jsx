import React, { Component } from 'react';

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gen: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state };
    this.props.handleAddUser(newUser);
    this.setState({ name: '', email: '', gen: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter Email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
            placeholder="Enter Gen"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add User
        </button>
      </form>
    );
  }
}

export default UsersForm;
