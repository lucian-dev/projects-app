import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailError('Please select a file');
      return;
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image');
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError('Image file size must me less than 100kb');
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>email: </span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
      </label>
      <label>
        <span>password: </span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
      </label>
      <label>
        <span>display name: </span>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} required />
      </label>
      <label>
        <span>profile image: </span>
        <input type="file" onChange={handleFileChange} required />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>

      {!isLoading && <button className="btn">Sign Up</button>}
      {isLoading && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      <p>
        Do you have an account? <Link to="/login">Login</Link>
      </p>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
