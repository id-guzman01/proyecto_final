import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import style from '../styles/totalpedidos.module.css'

const TotalPedidos = () => {

    let { total } = useContext(OrderContext);

    return (<>
        <section id={style.card_order_total}>
            <h2 id={style.title_total_order_card}>Total Pedidos</h2>
            <p id={style.card_total_order_number}>{total}</p>
        </section>
    </>);
}

export default TotalPedidos;