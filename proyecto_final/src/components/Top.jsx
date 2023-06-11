import { useContext, useEffect, useState } from "react";
import ProductContext from '../context/ProductContext'
import OrderContext from "../context/OrderContext";
import style from '../styles/top.module.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const Top = () => {
    const { listName, estadoProducto } = useContext(ProductContext);
    const { orders, estadoOrder } = useContext(OrderContext);
    
    let [data,setData] = useState([]);
    let [label,setLabel] = useState([]);
    let [options,setOptions] = useState([]);
    let [datos,setDatos] = useState([]);


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
                label[contador] = array.title.substring(0,20);
                contador++;
            }
        });

        }//Aquí finaliza el if
        



    options = {
        
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Productos más vendidos',
          },
        },
      };

      datos = {
        labels: label,
        datasets: [
          {
            label: 'Productos vendidos',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    


    return(<>

        <section id={style.section_grafica_productos}>
            <Bar options={options} data={datos} />
        </section>

    </>);
}

export default Top;