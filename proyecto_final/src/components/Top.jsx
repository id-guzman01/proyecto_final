import { useContext, useEffect, useState } from "react";
import ProductContext from '../context/ProductContext'
import OrderContext from "../context/OrderContext";

const Top = () => {
    const { listName, estadoProducto } = useContext(ProductContext);
    const { orders, estadoOrder } = useContext(OrderContext);
    
    let [data,setData] = useState([]);
    let [label,setLabel] = useState([]);

    useEffect(() => {

        if(estadoProducto && estadoOrder){
            let array = [];
            orders.map((ordenes) => {
                ordenes.products.map((productos) => {

                    let producto = listName.find((listName) => listName.id == productos.productId);
                    let elemento_array = array.find((array) => array.id == producto.id);
                    if(elemento_array){

                        array.forEach(array => {
                            if (array.id == producto.id){
                                array['count'] += productos.quantity;
                            }
                        });
    
                    }else{
                        array = [...array,
                            { 
                                id: producto.id,
                                title: producto.title,
                                count: productos.quantity
                            },
                        ]
                        
                    }


                });
            });


        let contador = 0;
        array.map((array) => {
            if(array.count >= 3){
                data[contador] = array.count;
                label[contador] = array.title;
                contador++;
            }
        });
            console.log(data);
            console.log(label);
        }//Aquí finaliza el if
        
        return(() => {

        });
    });


    return(<>
        


    </>);
}

export default Top;