import Navbar from "./Navbar";
import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";
import Ingresos from "./Ingresos";
import Top from "./Top";
import style from '../styles/dashboard.module.css'
import ProductContext from "../context/ProductContext";
import OrderContext from "../context/OrderContext";
import { useContext } from "react";

const Dashboard = () => {

    const { productos, listName, estadoProducto, errorProducto  } = useContext(ProductContext);
    const { orders, errorOrder } = useContext(OrderContext);
    
    if(errorOrder || errorProducto){
        return(<>
            <section>
                <Navbar />
                <TotalProducto />
                <Promedio />
                <TotalPedidos />
                <Ingresos />
                <Top />
            </section>
        </>);
    }

    return(<>

        {( productos && listName && estadoProducto && orders ) ? (

            <section>
                <Navbar />
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