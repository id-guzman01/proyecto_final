import style from '../styles/totalproducto.module.css'
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const TotalProducto = () => {

    let { productos, promedio  } = useContext(ProductContext);

    return(<>

        <section id={style.card_total}>
            <h2 id={style.title_card_total}>Productos en el almacen</h2>
            <ul id={style.list_card_total}>
            {productos.map((productos) => (
                <li className={style.element_list_total} key={productos.id}>
                    <h3 className={style.name_product_list_total}>{productos.title}</h3>
                </li>
            ))}
            </ul>
            <p id={style.total_products}>Total de productos en el almacen: <span>{productos.length}</span></p>
        </section>

    </>);
}

export default TotalProducto;