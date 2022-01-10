import { useSelector, useDispatch } from 'react-redux';
import { getDrivers } from './redux/drivers/driversSelectors';
import {fetchDriversWorker, fetchDriversApi} from './redux/drivers/driversSagas';
import {fetchDrivers} from './redux/drivers/driversActions';
import Main from "./components/main/Main";

function App() {
  const dispatch = useDispatch()

  const drivers = useSelector(getDrivers);

  console.log(fetchDriversApi());

  return (
    <>
      <Main/>
    </>
  );

}

export default App;
