import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {
  return (
    <div className={`alert alert-${type} d-flex justify-content-around`} role="alert">
        <span>
          {children}
        </span>
      {
        onDismiss && (<span onClick={onDismiss}>
          x
        </span>)
      }
    </div>
  );
};

export default Alert;