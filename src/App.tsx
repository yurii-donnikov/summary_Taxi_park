import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Drivers from './components/Drivers/Drivers';
import Home from './components/Home/Home';
import Cars from './components/Cars/Cars';
import Main from "./components/main/Main";
import { useSelector, useDispatch } from 'react-redux';
import { getDrivers } from './redux/drivers/driversSelectors';
import {fetchDriversWorker, fetchDriversApi} from './redux/drivers/driversSagas';
import {fetchDrivers} from './redux/drivers/driversActions';

function App() {
  const dispatch = useDispatch()

  const drivers = useSelector(getDrivers);

  console.log(fetchDriversApi());
    
  return (
    <BrowserRouter>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
        <Main/>
      </>
    </BrowserRouter>
  );


}

export default App;
