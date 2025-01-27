import { useState } from 'react'

function Login() {
    const URL = 'https://seruni-backend-production.up.railway.app';
    const [formLogin, setFormLogin] = useState({
      username: '',
      password: '',
    });
  
    const handleChangeLogin = (e: { target: { name: string; value: string; }; }) => {
      setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async(e: { preventDefault: () => void; }) => {
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
  
  export default Login;