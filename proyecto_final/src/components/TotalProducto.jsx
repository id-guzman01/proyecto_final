import style from '../styles/totalproducto.module.css'
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const TotalProducto = () => {

    let { productos, total  } = useContext(ProductContext);

    return(<>

        <section id={style.card_order_total}>
            <h2 id={style.title_total_order_card}>Total Productos</h2>
            <p id={style.card_total_order_number}>{total}</p>
        </section>

    </>);
}

export default TotalProducto;