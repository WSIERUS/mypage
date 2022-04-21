import React from 'react'

function Form() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      Tutaj będzie formularz
    </div>
  );
}

export default Form;
