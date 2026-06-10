import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <MuiThemeProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
          </Routes>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
