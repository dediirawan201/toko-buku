import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  const [books, setBooks] = useState([
    {_id:1, judul:"laskar pelangi", pengarang:"andrea hinata", harga:400000, stok:10},
  {_id:2, judul:"Naruto", pengarang:"laskar", harga:900000, stok:11},
  ])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Beranda />
          </Route>
          <Route path='/manajemen-buku'>
            <ManajemenBuku bookList={books}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
