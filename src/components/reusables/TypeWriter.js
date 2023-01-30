import React, { useState } from "react";
import '../../css/TypeWriter.css'
const Typewriter = ({ text }) => {
  const [state, setState] = useState({
    index: 0,
    text: "Currency Converter"
    
    
    
});

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setState(prevState => ({
        ...prevState,
        index: prevState.index + 1
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [state.index]);

  return (
    <p className="typewriter">
      <span>{state.text.substring(0, state.index)}</span>
      
      <span className="cursor">|</span>
    </p>
  );
};

export default Typewriter;