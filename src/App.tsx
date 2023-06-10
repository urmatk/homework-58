import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./componets/Modal/Modal";



const App=() => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        className="w-10 btn btn-primary"
        onClick={() => setShow(true)}
      >
        Modal
      </button>

      <Modal show={show}>
        <div className="modal-header d-flex justify-content-between" >
          <h1 className="modal-title fs-5">Some kinda modal title</h1>
          <p onClick={() => setShow(false)}>X</p>
        </div>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>

    </div>
  );
}

export default App;
