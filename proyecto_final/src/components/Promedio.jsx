import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";
import style from '../styles/promedio.module.css'

const Promedio = () => {
    let { promedio  } = useContext(ProductContext);

    return (<>

        <section id={style.card_promedio}>
            <h2 id={style.title_section_card}>Precio promedio</h2>
            <p id={style.card_promedio_number}><span>{promedio}</span> USD</p>
        </section>
        
    </>);
}

export default Promedio;