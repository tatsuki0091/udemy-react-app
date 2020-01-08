import React from 'react';


function App() {
  const greeting = "hi tom";
  const dom = <h1 className="foo">{greeting}</h1>;
  return (
    <React.Fragment>
      <label htmlForm="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked")}} />
    </React.Fragment>
  );
}

export default App;
