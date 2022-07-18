import RegisterForm from "./Components/RegisterForm";
import Table from "./Components/Table";
import { shallowEqual, useSelector } from 'react-redux'

const App = () => {

    const clients = useSelector(state => state.clients, shallowEqual)

    return (
        <>
            <RegisterForm/>
            <Table clients={clients}></Table>
        </>
    );
}

export default App;
