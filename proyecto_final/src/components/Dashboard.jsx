import Navbar from "./Navbar";
import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";

const Dashboard = () => {

    return(<>
        <Navbar />
        <TotalProducto />
        <Promedio />
        <TotalPedidos />
    </>);
}

export default Dashboard;