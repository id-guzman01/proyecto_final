import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";
import Ingresos from "./Ingresos";
import Top from "./Top";
import style from '../styles/dashboard.module.css'
import ProductContext from "../context/ProductContext";
import OrderContext from "../context/OrderContext";
import { useContext, useEffect, useState } from "react";
import ShowContext from '../context/ShowContext';

const Dashboard = () => {

    const { productos, errorProducto  } = useContext(ProductContext);
    const { orders, errorOrder } = useContext(OrderContext);
    const { show, setShow  } = useContext(ShowContext);

    let [estado,setEstado] = useState(false);
    useEffect(() => {
        if(productos && orders){
            setEstado(true);
        }
        return(() => {
            setEstado(false);
        });
    });
    
    if (!show || show != "dashboard") {
        return null;
    }

    if(errorOrder || errorProducto){
        return(<>
            <section>
                <TotalProducto />
                <Promedio />
                <TotalPedidos />
                <Ingresos />
                <Top />
            </section>
        </>);
    }

    return(<>

        {( estado ) ? (

            <section>
                <TotalProducto />
                <Promedio />
                <TotalPedidos />
                <Ingresos />
                <Top />
            </section>

        ) : (

            <span id={style.preloader_3}>
            </span>

        )}


    </>);
}

export default Dashboard;