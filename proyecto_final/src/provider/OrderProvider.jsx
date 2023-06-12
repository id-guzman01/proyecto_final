import { useContext, useEffect, useState } from "react";
import OrderContext from "../context/OrderContext";
import ProductContext from "../context/ProductContext";

const OrderProvider = ({children}) => {
    let [orders,setOrders] = useState([]);
    let [total,setTotal] = useState(0);

    let [estadoOrder,setEstadoOrder] = useState(false);

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
            if(orders){
                setEstadoOrder(true);
            }
        })
        .catch((error) => {
            alert('Error al cargar los datos del API, intente más tarde');
        });
    }

    const calcularTotalPedidos = (arreglo) => {
        setTotal(total = arreglo.length);
    }

    return (<>
        <OrderContext.Provider value={{ orders, total, estadoOrder }}>
            {children}
        </OrderContext.Provider>
    </>);
}

export default OrderProvider;