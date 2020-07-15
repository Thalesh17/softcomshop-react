import React from "react";
import {AuthProvider} from './contexts/auth';
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import history from './history';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter history={history}>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
