// https://www.miracleave.co.jp/contents/1816/front-end-development-msw-mocks/
import React, { FC, useCallback, useState } from 'react';
import { useAuth } from '../hook/useAuth';
import { useNavigate } from "react-router-dom";

// login form
export const Login: FC = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const { login, loading, response, errorMessage } = useAuth();

  const handleUsernameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      login(username).then(() => navigate("/top"));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [username]
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>Error while fetching the user data ({errorMessage})</p>;
  }
  if (response) {
    console.log("response:", response);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input id='username' name='username' value={username} onChange={handleUsernameChange} />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};
