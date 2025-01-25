import './App.css';
import { useState } from 'react'

function App() {
  const URL = 'https://seruni-backend-production.up.railway.app';
  // const URL = 'http://localhost:3000'
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    email: '',
    phone: '',
  });
  const [users, setUsers] = useState({});
  const [formLogin, setFormLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        // mode: 'no-cors',
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  };

  const handleUser = async(e) => {
    try {
      const response = await fetch(`${URL}/register`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.status === 204 ? null : await response.json();
      console.log('Response from backend:', data);

      if (response.ok) {
        setUsers(data);
      } else {
        alert('Error get users!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  }

  const handleChangeLogin = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formLogin),
      });

      const token = response.status === 204 ? null : await response.json();

      if (response.ok) {
        // Code to input token to cookies
        document.cookie = `token=${token}; path=/; max-age=3600`; // Expires in 1 hour
        alert('Login successful!');
      } else {
        alert('Error during login!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error during login.');
    }
  }

  return (
    <>
      <div className='wrapper'>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            autoComplete='off' ></input>
          <br></br>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            autoComplete='off'
          ></input>
          <br></br>
          <button type='submit'>Register</button>
        </form>
        <div>
          <h2>Users</h2>
          <button type='submit' onClick={handleUser}>Generate User</button>
          <p>{JSON.stringify(users)}</p>
        </div>
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formLogin.username}
            onChange={handleChangeLogin}
            autoComplete='off' ></input>
          <br></br>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formLogin.password}
            onChange={handleChangeLogin}
            autoComplete='off'
          ></input>
          <button type='submit'>Login</button>
          </form>
        </div>
        <div>
          <h2>Dashboard Access</h2>
          <button>Go to the dashboard</button>
        </div>
      </div>
    </>
  );
}

export default App;
