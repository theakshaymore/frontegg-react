import React, { useEffect } from "react";

import { ContextHolder } from "@frontegg/rest-api";
import { AdminPortal, useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    AdminPortal.show();
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className="card">
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div className="detail">
            <span className="heading">Name: {user?.name}</span>
            <span className="heading">Name: {user?.email}</span>
          </div>
          <div>
            <button onClick={() => logout()} className="button">
              Click to logout
            </button>
            <button onClick={() => handleClick()} className="button">
              View full Profile
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()} className="button">
            Click me to signin
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
