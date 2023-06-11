import Navbar from "./Navbar";
import TotalProducto from './TotalProducto'
import Promedio from "./Promedio";
import TotalPedidos from "./TotalPedidos";
import Ingresos from "./Ingresos";
import Top from "./Top";

const Dashboard = () => {

    return(<>
        <Navbar />
        {/*<TotalProducto />
        <Promedio />
        <TotalPedidos />
        <Ingresos />*/}
        <Top />
    </>);
}

export default Dashboard;