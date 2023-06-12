import { useState } from 'react';
import style from '../styles/navbar.module.css'

const Navbar = () => {

    let [show,setShow] = useState(false);

    return(<>

            <header id={style.cabeza}>

            <picture id={style.picture_navbar}>
                <img src="./logo.png" alt="Logo de la empresa" />
            </picture>

            <nav id={style.navbar}>
                <a className={style.btn_navbar} href="#" title='Apartado de Dashboard'>Dashboard</a>
                <a className={style.btn_navbar} href="#" title='Apartado de productos'>Productos</a>
            </nav>


        </header>
        
    </>);
}

export default Navbar;