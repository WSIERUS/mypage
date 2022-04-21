import React, {useEffect} from 'react'

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      Działa!!!
    </div>
  );
}

export default App;