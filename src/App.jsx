import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => { console.log('mounted'); }, []);

  return (
    <div>
      Test
    </div>
  );
};

export default App;
