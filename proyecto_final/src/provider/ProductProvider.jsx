import ProductContext from "../context/ProductContext";
import { useState, useEffect } from "react";

const ProductProvider = ({children}) => {

    let [productos, setProductos] = useState([]);
    let [promedio, setPromedio] = useState(0);

    useEffect(() => {
                  
            fetch('https://fakestoreapi.com/products')
            .then((res)=>res.json())
            .then((data)=> {setProductos(productos = data)})
            .catch((error) => console.error(error));

            let prom = 0;
            productos.map((productos) => {
                prom += productos.price;
            });
            prom = prom/productos.length;
            setPromedio(prom);

    },[]);

    return (<>
        <ProductContext.Provider value={{ productos, promedio }}>
            {children}
        </ProductContext.Provider>
    </>);
}

export default ProductProvider