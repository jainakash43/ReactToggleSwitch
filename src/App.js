import React from 'react';
import ToggleSwitch from './Components/ToggleSwitch';

const App = () => {
  
  const [toggled, setToggled]= React.useState(false);
  
  const handleClick=()=>{
    setToggled((s) => !s);
  

  }
  return (
     
     <ToggleSwitch toggled={toggled} handleClick={handleClick} />
    
  );
};

export default App;