import style from '../styles/ingresos.module.css'
import ProductContext from '../context/ProductContext'
import OrderContext from '../context/OrderContext'
import { useContext, useEffect, useState } from 'react'

const Ingresos = () => {
    let { listPrice } = useContext(ProductContext);
    let { orders } = useContext(OrderContext);

    let [ingreso,setIngreso] = useState(0);

    useEffect(() => {

        let count = 0;
            orders.map((datos) => {
                datos.products.map((dato) =>{
                let elemento = listPrice.find((listPrice) => listPrice.id == dato.productId);
                count += elemento.price * dato.quantity;
            });
        });
        setIngreso(count.toFixed(2));

        return (() => {
            setIngreso(0);
        });
    });

    return (<>
        <section id={style.card_ingresos}>
            <h2 id={style.title_card_ingresos}>Ingresos Totales</h2>
            <p id={style.card_ingresos_total}>{ingreso} USD</p>
        </section>
    </>);
}

export default Ingresos;