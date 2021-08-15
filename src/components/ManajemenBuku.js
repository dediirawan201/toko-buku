import React, { useState } from "react";

function ManajemenBuku({ bookList,store, deleteBook }) {
  const [form,setForm] = useState("")
  const [inputBook,setInputBook] = useState()

  function showAdd(){
      setForm("create")
  }

  function showEdit(book){
      setInputBook(book)
      setForm("edit")
  }
  function handleJudul(event){
    console.log(event.target.value)
    setInputBook({...inputBook, judul: event.target.value})
  }
  function handlePengarang(event){
    setInputBook({...inputBook, pengarang: event.target.value})
  }
  function handleHarga(event){
    setInputBook({...inputBook, harga: event.target.value})
  }
  function handleStok(event){
    setInputBook({...inputBook, stok: event.target.value})
  }
  function submitAdd(e){
    e.preventDefault()
    store(inputBook) 
    setForm("")
  }
  return (
    <div className='container mt-3'>
      <h1 className='text-center'>Manajemen Buku</h1>
        {form == "create" &&(
      <div id='formTambah' onSubmit={submitAdd}>
          <h5>Tambah Buku</h5>
          <hr />
          <form className="row">
              <div className="col-3">
                <input type="text" name="judul" className="form-control mx-2" placeholder="judul" onChange={handleJudul} />
              </div>
              <div className="col-3">
                <input type="text" name="pengarang" className="form-control mx-2" placeholder="pengarang" onChange={handlePengarang} />
              </div>
              <div className="col-2">
                <input type="text" name="harga" className="form-control mx-2" placeholder="harga" onChange={handleHarga} />
              </div>
              <div className="col-2">
                <input type="number" name="stok" className="form-control mx-2" placeholder="stok" onChange={handleStok}  />
              </div>
              <div className="col-2">
                <input type="submit" className="btn btn-primary ml-5" placeholder="simpan" />
              </div>
            </form>
      </div>
)}
    {form == "edit" && (
      <div id='formUbah' className="mt-3">
          <h5>Ubah Buku</h5>
          <hr />
          <form className="row">
              <div className="col-3">
                <input type="text" name="judul" className="form-control mx-2" placeholder="judul" value={inputBook.judul} />
              </div>
              <div className="col-3">
                <input type="text" name="pengarang" className="form-control mx-2" placeholder="pengarang" value={inputBook.pengarang} />
              </div>
              <div className="col-2">
                <input type="text" name="harga" className="form-control mx-2" placeholder="harga" value={inputBook.harga}/>
              </div>
              <div className="col-2">
                <input type="number" name="stok" className="form-control mx-2" placeholder="stok" value={inputBook.stok}/>
              </div>
              <div className="col-2">
                <input type="submit" className="btn btn-warning ms-2" value="ubah" />
              </div>
              </form>
      </div>
    )}
      <div id='daftarBuku'>
        <h2 className='mt-3'>Daftar Buku</h2>
        <hr />
        <button className='btn btn-primary m-2' onClick={showAdd}>Tambah Buku</button>
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
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td>
                  <button className='btn btn-info me-3' onClick={() => showEdit(book)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => deleteBook(book._id)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManajemenBuku;
