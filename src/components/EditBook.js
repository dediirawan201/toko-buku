import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditBook = () => {
  const [judul, setJudul] = useState('');
  const [pengarang, setPengarang] = useState('');
  const [harga, setHarga] = useState('');
  const [stok, setStok] = useState('');
  const history = useHistory();
  const {id} = useParams();

  const getProductById = async() => {
      const response = await fetch(`http://localhost:8080/books/${id}`);
      const data = await response.json();
      setJudul(data.judul);
      setPengarang(data.pengarang);
      setHarga(data.harga);
      setStok(data.stok);
  }
  
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
    <div className="mb-3">
      {/* {form == "create" && ( */}
      <div id='formTambah' className="mt-4" onSubmit={saveBook}>
        <h5>Ubah Buku</h5>
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

export default EditBook;
