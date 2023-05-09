import React from 'react';
import useCount from './useCount';
import { useEffect, useState } from 'react';

function CalculateComp(props) {
  const [count, plus, minus] = useCount();
  const [isZero, setZero] = useState(true);

  useEffect(() => {
    console.log('useEffect');
  }, []); // called when mount, unmount

  useEffect(() => {
    console.log('count ', count);
    if (count === 0) {
      setZero(true);
    } else {
      setZero(false);
    }
  }, [count]); // called when count is changed
  return (
    <div>
      <h3>
        Count : {count} / {`${isZero}`}
      </h3>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default CalculateComp;
