import React from 'react';
import PropTypes from 'prop-types'


// function App() {
//   const greeting = "hi tom";
//   const dom = <h1 className="foo">{greeting}</h1>;
//   return (
//     <React.Fragment>
//       <label htmlForm="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I am clicked")}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  const profiles = [
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name: "noname"}
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>)
}

const User = (props) => {
  return <div>
    Hi! I am {props.name} and {props.age} years old.
    </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
