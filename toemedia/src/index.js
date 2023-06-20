import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider, usePost } from "./context/PostContext";
import { UserProvider, useUsers } from "./context/UserContext";
import { AuthProvider, Authenticate } from "./context/AuthContext";
import { OpsProvider, userOps } from "./context/OpsContext";
import { BookmarkProvider, bookmarkOps } from "./context/BookmarkContext";

export { usePost, useUsers, Authenticate, userOps, bookmarkOps };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <OpsProvider>
              <BookmarkProvider>
                <App />
              </BookmarkProvider>
            </OpsProvider>
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Call make Server
makeServer();
reportWebVitals();
