import React from 'react';
import { useParams } from 'react-router-dom';
import BreadcrambsCars from '../../components/Breadcrambs/BreadcrambsCars';
import CarList from '../../components/CarsList/CarList';
function Cars(): JSX.Element {
    const idDriver = useParams();
    console.log(idDriver);
    return (
        <>
        <BreadcrambsCars/>
        <CarList {...idDriver}/>
        </>
        
    );
}
export default Cars;