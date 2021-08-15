import React, { useEffect, useState } from 'react'

function Beranda() {
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
            <h1 className="text-center">Selamat datang di toko buku compt 404</h1>
            <hr />
            <table className='table table-bordered'>
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stok</th>

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
              </tr>
            ))}
          </tbody>
        </table>
            <div id="katalog"></div>
        </div>
    )
}

export default Beranda;
