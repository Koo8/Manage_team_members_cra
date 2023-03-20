import React from 'react';

function Button({ children, handleClick }) {
  return (
    <button
      className='bg-teal-500 hover:bg-teal-700 text-white py-1 px-4 rounded'
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
