import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBook = () => {
  const [judul, setJudul] = useState('');
  const [pengarang, setPengarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const history = useHistory();

  const saveBook = async(e) => {
      e.preventDefault();
      const buku = {judul,pengarang,harga,stok};
      await fetch("http://localhost:8080/books",{
          method: "POST",
          body: JSON.stringify(buku),
          headers:{
              'Content-Type': 'application/json'
          }
      });
      history.push('/')
  }
  return (
    <div >
      {/* {form == "create" && ( */}
      <div id='formTambah' onSubmit={saveBook}>
        <h5>Tambah Buku</h5>
        <hr />
        <form className='row' >
          <div className='col-3'>
            <input
              type='text'
              value={judul}
              className='form-control mx-2'
              placeholder='judul'
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className='col-3'>
            <input
              type='text'
              value={pengarang}
              className='form-control mx-2'
              placeholder='pengarang'
              onChange={(e) => setPengarang(e.target.value)}
            />
          </div>
          <div className='col-2'>
            <input
              type='text'
              value={harga}
              className='form-control mx-2'
              placeholder='harga'
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          <div className='col-2'>
            <input
              type="number"
              value={stok}
              className='form-control mx-2'
              placeholder='stok'
              onChange={(e) => setStok(e.target.value)}
            />
          </div>
          <div className='col-2'>
            <button
              type='submit'
              className='btn btn-primary ml-5'
              placeholder='simpan'
            >
              save
            </button>
          </div>

        </form>
      </div>
      {/* )} */}
    </div>
  );
};

export default AddBook;
