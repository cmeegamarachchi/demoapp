import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { user } = await( await fetch(`/api/echo`)).json();
      setData(user);
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
