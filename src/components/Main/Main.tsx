import { Route, Routes } from 'react-router';
import Home from '../../pages/HomePage/HomePage';
import Drivers from '../../pages/DriversPage/DriversPage';
import Cars from '../../pages/CarsPage/CarsPage';
import { Path } from '../../constants/path';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path={Path.HOME} element={<Home />} />
        <Route path={Path.DRIVERS} element={<Drivers />} />
        <Route path={Path.CARS} element={<Cars />} />
        <Route path={Path.DRIVERS_CARS} element={<Cars />}/>
      </Routes>
    </main>
  );
};

export default Main;
