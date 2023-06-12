import { useContext, useState } from "react";
import style from '../styles/productos.module.css'
import ShowContext from "../context/ShowContext";

const Productos = () => {

    const { show, setShow  } = useContext(ShowContext);

    if (!show || show != "productos") {
        return null;
    }

    return(<>
        <h1>Hola mundo</h1>
    </>);
}

export default Productos;
