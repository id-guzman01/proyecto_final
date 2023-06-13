import { useContext, useState } from "react";
import style from '../styles/productos.module.css'
import ShowContext from "../context/ShowContext";

const Productos = () => {

    const { show, setShow  } = useContext(ShowContext);

    if (!show || show != "productos") {
        return null;
    }

    return(<>
        
        <section id={style.section_products}>
            <h2 id={style.title_section_products}>Productos</h2>

            <section id={style.content_products}>

                <article className={style.product}>
                    <h3 className={style.title_product}>Producto</h3>    
                    <picture className={style.picture_product}>
                        <img src="https://tottoco.vteximg.com.br/arquivos/ids/164466/PORTER-ML-H-1720-6MX_A.png?v=636477220678270000" alt="Imagen del producto en venta" />
                    </picture>
                    <p className={style.price_product}>123456 USD</p>
                    <button className={style.btn_product}>Ver Detalles</button>
                </article>

            </section>
        </section>

    </>);
}

export default Productos;
