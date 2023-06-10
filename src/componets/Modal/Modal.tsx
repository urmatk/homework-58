import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
}

const Modal: React.FC<Props> = ({show,children}) => {
  return (
    <>
      <div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
      >
        <div className="modal-dialog" >
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;