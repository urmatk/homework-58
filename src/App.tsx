import React, {useState} from 'react';
import './App.css';
import Modal from "./componets/Modal/Modal";
import Alert from "./componets/Alert/Alert";



const App=() => {
  const [alerts, setAlerts] = useState([
    {
      text: '1',
      type: 'primary'
    },
    {
      text: '2',
      type: 'secondary'
    },
    {
      text: '3',
      type: 'danger'
    },
    {
      text: '4',
      type: 'warning'
    },
  ])
  const [show, setShow] = useState(false);
  const closeAlert = (index: number) => {
    const newAlerts = alerts.filter((alert, i) => index !== i);
    setAlerts(newAlerts);
  }

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
      {
        alerts.map((alert, i) => {
          return <Alert key={i} type={alert.type} onDismiss={() => closeAlert(i)}>
            {alert.text}
          </Alert>
        })
      }

    </div>
  );
}

export default App;
