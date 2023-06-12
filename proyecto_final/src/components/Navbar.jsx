import { useContext, useState } from 'react';
import style from '../styles/navbar.module.css'
import ShowContext from '../context/ShowContext'

const Navbar = () => {
    const { show, setShow  } = useContext(ShowContext);

    return(<>

            <header id={style.cabeza}>

            <picture id={style.picture_navbar}>
                <img src="./logo.png" alt="Logo de la empresa" />
            </picture>

            <nav id={style.navbar}>
                <a className={style.btn_navbar} href="#" title='Apartado de Dashboard' onClick={(evento) => {
                  evento.preventDefault();
                  setShow('dashboard');  
                }}>Dashboard</a>
                <a className={style.btn_navbar} href="#" title='Apartado de productos' onClick={(evento) => {
                    evento.preventDefault();
                    setShow('productos');
                }}>Productos</a>
            </nav>


        </header>
        
    </>);
}

export default Navbar;