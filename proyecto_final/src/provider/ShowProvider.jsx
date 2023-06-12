import { useState } from "react";
import ShowContext from "../context/ShowContext";

const ShowProvider = ({children}) => {
    const [show,setShow] = useState('dashboard')
    return (
        <ShowContext.Provider value={{ show, setShow }}>
          {children}
        </ShowContext.Provider>
      );
}

export default ShowProvider;