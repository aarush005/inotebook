import React from 'react';

const capitalize = (word) => {
  if (word==="danger"){
    word = "error"
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const Alert = (props) => {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;