import ProductContext from "../context/ProductContext";
import { useState, useEffect } from "react";

const ProductProvider = ({children}) => {

    let [productos, setProductos] = useState([]);
    let [total,setTotal] = useState(0);
    let [promedio, setPromedio] = useState(0);

    useEffect(() => {
        cargarData();
        return(() => {
            setProductos([]);
            setTotal(0);
            setPromedio(0);
        });
    },[]);

    const cargarData = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> {
            setProductos(productos = data);
            calcularPromedioPrecio(data);
            calcularTotalProductos(data);
        })
        .catch((error) => console.error(error));
    }

    const calcularTotalProductos = (arreglo) => {
        setTotal(total = arreglo.length); 
    }

    const calcularPromedioPrecio = (arreglo) => {
            let suma = 0; let prom = 0;
            arreglo.map((arreglo) => {
                suma += arreglo.price;
            });
            prom = suma/arreglo.length;
            setPromedio(prom.toFixed(2));
    }


    return (<>
        <ProductContext.Provider value={{ productos, total, promedio }}>
            {children}
        </ProductContext.Provider>
    </>);
}

export default ProductProvider