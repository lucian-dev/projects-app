import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email: </span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </label>
      <label>
        <span>password: </span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
      </label>
      {!isLoading && <button className="btn">Login</button>}
      {isLoading && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      <p>
        No account? <Link to="/signup">Create one</Link>
      </p>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
