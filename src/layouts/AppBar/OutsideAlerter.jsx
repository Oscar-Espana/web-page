import React, { useRef, useEffect } from 'react';

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}

function OutsideAlerter({ children, callback }) {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, callback);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
