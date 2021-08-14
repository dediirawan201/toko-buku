import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Beranda />
          </Route>
          <Route path='/manajemen-buku'>
            <ManajemenBuku />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
