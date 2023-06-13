import { useContext, useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";
import ProductContext from "../context/ProductContext";

const OrderProvider = ({children}) => {
    let [orders,setOrders] = useState([]);
    let [total,setTotal] = useState(0);


    let [errorOrder,setErrorOrder] = useState(false);

    useEffect(() => {
        cargarOrders();
        return(() => {
            setOrders([]);
        });
    },[]);

    const cargarOrders = () => {
        fetch('https://fakestoreapi.com/carts')
        .then((data)=>data.json())
        .then((data)=>{
            setOrders(orders = data);
            calcularTotalPedidos(data);

        })
        .catch((error) => {
            alert('Error al cargar los datos, intente más tarde');
            setErrorOrder(true);
        });
    }

    const calcularTotalPedidos = (arreglo) => {
        setTotal(total = arreglo.length);
    }

    return (<>
        <OrderContext.Provider value={{ orders, total, errorOrder }}>
            {children}
        </OrderContext.Provider>
    </>);
}

export default OrderProvider;