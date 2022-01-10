import React from 'react';
import BreadcrambsDrivers from '../../components/Breadcrambs/BreadcrambsDrivers';
import DriverList from '../../components/DriverList/DriverList';

function Drivers(): JSX.Element {
  return (
    <>
      <BreadcrambsDrivers />
      <DriverList/>
    </>
  );
}
export default Drivers;
