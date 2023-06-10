import Navbar from "./Navbar";
import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";
import Ingresos from "./Ingresos";

const Dashboard = () => {

    return(<>
        <Navbar />
        <TotalProducto />
        <Promedio />
        <TotalPedidos />
        <Ingresos />
    </>);
}

export default Dashboard;