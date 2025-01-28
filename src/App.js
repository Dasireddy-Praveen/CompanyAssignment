import {Component} from 'react'
import './App.css'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

class App extends Component {
  state = {
    users: [],
    formData: {name: '', email: '', department: ''},
    isEditing: false,
    currentUserId: null,
  }

  componentDidMount() {
    this.fetchUsers()
  }

  handleChange(e) {
    const {formData} = this.state
    console.log(e.target.value)
    const {name, value} = e.target

    this.setState({
      formData: {...formData, [name]: value},
    })
  }

  handleAddUser() {
    const {formData} = this.state
    const newUser = {
      name: formData.name,
      email: formData.email,
      company: {name: formData.department},
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (response.ok) {
          alert('User added successfully')
          this.fetchUsers()
          this.resetForm()
        } else {
          alert('Error adding user')
        }
      })
      .catch(error => {
        alert('Error adding user')
      })
  }

  handleUpdateUser() {
    const {formData, currentUserId} = this.state
    const updatedUser = {
      name: formData.name,
      email: formData.email,
      company: {name: formData.department},
    }

    fetch(`${apiUrl}/${currentUserId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => {
        if (response.ok) {
          alert('User updated successfully')
          this.fetchUsers()
          this.resetForm()
        } else {
          alert('Error updating user')
        }
      })
      .catch(error => {
        alert('Error updating user')
      })
  }

  handleDeleteUser(userId) {
    fetch(`${apiUrl}/${userId}`, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          alert('User deleted successfully')
          this.fetchUsers()
        } else {
          alert('Error deleting user')
        }
      })
      .catch(error => {
        alert(`${error}`)
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const {isEditing} = this.state
    if (isEditing) {
      this.handleUpdateUser()
    } else {
      this.handleAddUser()
    }
  }

  handleEditUser(user) {
    this.setState({
      formData: {
        name: user.name,
        email: user.email,
        department: user.company.name,
      },
      isEditing: true,
      currentUserId: user.id,
    })
  }

  resetForm() {
    this.setState({
      formData: {name: '', email: '', department: ''},
      isEditing: false,
      currentUserId: null,
    })
  }

  fetchUsers() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({users: data})
      })
      .catch(error => {
        alert(`${error}`)
      })
  }

  render() {
    const {formData, isEditing, users} = this.state

    return (
      <div className="App">
        <h1>User Management</h1>
        <button
          type="button"
          className="add-button"
          onClick={() => this.setState({isEditing: false})}
        >
          Add User
        </button>

        <ul className="user-list-container">
          {users.map(user => (
            <li key={user.id}>
              <p>ID: {user.id}</p>
              <p>First Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Department: {user.company.name}</p>
              <button
                type="button"
                className="edit-button"
                onClick={() => this.handleEditUser(user)}
              >
                Edit
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={() => this.handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: isEditing || formData.name ? 'block' : 'none',
          }}
        >
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={e => this.handleChange(e)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={e => this.handleChange(e)}
            />
            <button type="submit">
              {isEditing ? 'Update User' : 'Add User'}
            </button>
            <button type="button" onClick={() => this.resetForm()}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
