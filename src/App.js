import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { clientPrincipal } = await( await fetch(`/api/echo`)).json();
      setData(clientPrincipal);
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
