import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBook from "./AddBook";
import EditBook from "./EditBook";

function ManajemenBuku() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetchData()
  },[])

  const fetchData = async() => {
      const response = await fetch('http://localhost:8080/books');
      const data = await response.json();
      setBooks(data)
  }
  return (
    <div className="mt-3 container w-75">
    <h1 className="text-center">Manajemen Buku</h1>
    <hr />
    <AddBook />
    <EditBook />
    <table className='table table-bordered'>
  <thead>
    <tr>
      <th>No.</th>
      <th>Judul</th>
      <th>Pengarang</th>
      <th>Harga</th>
      <th>Stok</th>
      <th>Aksi</th>

    </tr>
  </thead>
  <tbody>
    {books.map((book, index) => (
      <tr key={book.id}>
        <td>{index + 1}</td>
        <td>{book.judul}</td>
        <td>{book.pengarang}</td>
        <td>{book.harga}</td>
        <td>{book.stok}</td>
        <td>
          <BrowserRouter>
          <Switch>
            <Route path="/manajemen-buku/:id">
          <button type="submit" className="btn btn-primary me-2">Edit</button>

            </Route>
          <button type="submit" className="btn btn-danger me-2">Hapus</button>

          </Switch>
          </BrowserRouter>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    <div id="katalog"></div>
</div>
  );
}

export default ManajemenBuku;
