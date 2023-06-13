import ProductContext from "../context/ProductContext";
import { useState, useEffect } from "react";

const ProductProvider = ({children}) => {

    let [productos, setProductos] = useState([]);
    let [total,setTotal] = useState(0);
    let [promedio, setPromedio] = useState(0);
    let [listPrice, setListPrice] = useState([]);
    let [listName,setListName] = useState([]);

    let [errorProducto,setErrorProducto] = useState(false);

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
            nameProduct(data);

        })
        .catch((error) => {
            alert('Error al cargar los datos, intente más tarde');
            setErrorProducto(errorProducto = true);
        });
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

    const nameProduct = (arreglo) => {

        arreglo.map((dato) => {

            setListName(
                listName = [
                    ...listName,
                    {
                        id: dato.id,
                        title: dato.title
                    },
            ]);
                
        });
            
    }


    return (<>
        <ProductContext.Provider value={{ productos, total, promedio, listPrice, listName, errorProducto }}>
            {children}
        </ProductContext.Provider>
    </>);
}

export default ProductProvider