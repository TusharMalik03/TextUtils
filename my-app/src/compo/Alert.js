import React from 'react';

export default function Alert(props) {
  return(
      <>
      {props.warn && <div className="alert ning my-0" role="alert">{props.warn}</div>}
     </>
  );
}
