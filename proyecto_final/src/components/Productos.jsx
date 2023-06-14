import { useContext, useState } from "react";
import style from '../styles/productos.module.css'
import ShowContext from "../context/ShowContext";
import ProductProvider from '../context/ProductContext'

const Productos = () => {

    const { productos } = useContext(ProductProvider);
    const { show, setShow  } = useContext(ShowContext);

    let [modal,setModal] = useState(false);
    let [producto,setProducto] = useState(null);

    if (!show || show != "productos") {
        return null;
    }

    const mostrarDetalles = (evento) =>{
        evento.preventDefault();
        let { id } = evento.target.elements;
        let temporal = productos.find((productos) => productos.id == id.value);
        setProducto(producto = temporal);
        setModal(true);
    }

    const renderSpans = (numero) => {
        const spans = [];
        for (let i = 0; i < numero; i++) {
          spans.push(<span className={style.stars_product_modal} key={i}>&#9733;</span>);
        }
        return spans;
      };

    return(<>
        
        <section id={style.section_products}>
            <h2 id={style.title_section_products}>Productos</h2>

            <section id={style.content_products}>

                {productos.map((dato => (

                    <article className={style.product} key={dato.id}>
                        <h3 className={style.title_product}>{dato.title.substring(0,12)}...</h3>    
                        <picture className={style.picture_product}>
                            <img src={dato.image} alt="Imagen del producto en venta" />
                        </picture>
                        <p className={style.price_product}> USD ${dato.price}</p>

                        <form action="#" onSubmit={mostrarDetalles}>
                        <input type="hidden" name="id" id="id" value={dato.id} />
                        <button type="submit" className={style.btn_product}>
                            Ver más <i className="fa-solid fa-plus"></i>
                        </button>
                        </form>

                    </article>

                )))}

            </section>
        </section>

        {(modal) ? (

            <main id={style.main_modal_details_product}>
                <section id={style.modal_details_product}>
                    <button id={style.btn_close_modal} onClick={(evento) => {
                        evento.preventDefault();
                        setModal(false);
                    }}><i className="fa-solid fa-xmark"></i></button>
                    <h2 id={style.title_modal_product}>Detalles del producto</h2>
                    <picture id={style.picture_modal_product}>
                        <img src={producto.image} alt="Imagen del producto en venta" />
                    </picture>
                    <article id={style.content_modal_product}>
                        <h3 id={style.name_modal_product}>{producto.title}</h3>
                        <p className={style.text_modal_product}>{producto.description}</p>
                        <p className={style.text_modal_product}> <span className={style.name_section_modal_product}>Categoria:</span> {producto.category}</p>
                        <p className={style.text_modal_product}><span className={style.name_section_modal_product}>Precio:</span> USD ${producto.price}</p>


                        <p className={style.text_modal_product_calificacion}><span className={style.name_section_modal_product}>Clasificación:</span> {producto.rating.rate} {renderSpans(Math.floor(producto.rating.rate))} </p>

                        <p className={style.text_modal_product}><span className={style.name_section_modal_product}>Votación:</span> {producto.rating.count}</p>

                    </article>
                </section>
            </main>

        ) : ('')}

    </>);
}

export default Productos;
