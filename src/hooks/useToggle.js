import { useState } from 'react';

function useToggle(initialVal = false) {
  // call use state and reverse piece of state

  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(() => !state);
  };
  return [state, toggle];
}

export default useToggle;
