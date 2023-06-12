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

    const { productos, listName, estadoProducto  } = useContext(ProductContext);
    const { orders } = useContext(OrderContext);

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

            <section id={style.preloader_3}>
            </section>

        )}


    </>);
}

export default Dashboard;