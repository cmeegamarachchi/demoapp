import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const message = (await fetch(`/api/echo`)).data;
      setData(user);
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
