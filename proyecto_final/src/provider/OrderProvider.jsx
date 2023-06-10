import { useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";

const OrderProvider = ({children}) => {
    let [orders,setOrders] = useState([]);
    let [total,setTotal] = useState(0);

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
        .catch((error) => console.error(error));
    }

    const calcularTotalPedidos = (arreglo) => {
        setTotal(total = arreglo.length);
    }

    return (<>
        <OrderContext.Provider value={{ orders, total }}>
            {children}
        </OrderContext.Provider>
    </>);
}

export default OrderProvider;