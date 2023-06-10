import ProductContext from "../context/ProductContext";
import { useState, useEffect } from "react";

const ProductProvider = ({children}) => {

    let [productos, setProductos] = useState([]);
    let [total,setTotal] = useState(0);
    let [promedio, setPromedio] = useState(0);
    let [listPrice, setListPrice] = useState([]);


    useEffect(() => {
        cargarData();
        return(() => {
            setProductos([]);
            setTotal(0);
            setPromedio(0);
            setListPrice([]);
        });
    },[]);

    const cargarData = () => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=>res.json())
        .then((data)=> {
            setProductos(productos = data);
            calcularPromedioPrecio(data);
            calcularTotalProductos(data);
            priceProduct(data);

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

    const priceProduct = (arreglo) => {

        if(listPrice.length < productos.length){

            arreglo.map((dato) => {

                setListPrice(
                    listPrice = [
                        ...listPrice,
                        {
                            id: dato.id,
                            price: dato.price,
                        },
                ]);
                
            });
            
        }
        
    }


    return (<>
        <ProductContext.Provider value={{ productos, total, promedio, listPrice }}>
            {children}
        </ProductContext.Provider>
    </>);
}

export default ProductProvider