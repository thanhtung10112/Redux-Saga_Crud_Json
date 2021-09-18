import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditUser from "./pages/AddEditUser";
import UserInfo from "./pages/UserInfo";
import About from "./pages/About";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer autoClose={2000} />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AddUser" component={AddEditUser} />
          <Route path="/EditUser/:id" component={AddEditUser} />
          <Route path="/UserInfo/:id" component={UserInfo} />
          <Route path="/About" component={About} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
