import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";
import Ingresos from "./Ingresos";
import Top from "./Top";
import style from '../styles/dashboard.module.css'
import ProductContext from "../context/ProductContext";
import OrderContext from "../context/OrderContext";
import { useContext } from "react";
import ShowContext from '../context/ShowContext';

const Dashboard = () => {

    const { productos, errorProducto  } = useContext(ProductContext);
    const { orders, errorOrder } = useContext(OrderContext);
    const { show, setShow  } = useContext(ShowContext);
    
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

        {( productos && orders ) ? (

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