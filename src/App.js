import React from "react";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Address from "./Pages/Address";
import PersonalDetails from "./Pages/PersonalDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Register}/>
          <Route path="/login" Component={Login}/>
          <Route path="/address" Component={Address}/>
          <Route path="/details" Component={PersonalDetails}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
