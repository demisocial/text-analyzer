import React from 'react'


export default function Alert({message, type}) {
    
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }

    return (
      <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(type)}! </strong>{message}
        {/* <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    );
}
