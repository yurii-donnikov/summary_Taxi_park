import { IAction, ICar } from '../../interfaces/carsInterfaces';
import { ActionTypesCar } from "../cars/carsTypes";

type State = {
    cars: ICar[],
}

const initialState: State = {
    cars: [],
}


const carsReduser = (state = initialState, action: IAction) => {
switch(action.type){
    case ActionTypesCar.FETCH_CARS_SUCCESS : 
    return { ...state, cars: action.payload };
    case ActionTypesCar.DELETE_CARS_SUCCESS:
      return {
        ...state,
        cars: state.cars.filter(car => Number(car.id) !== action.payload),
      };
    case ActionTypesCar.FETCH_CARS_DRIVER_SUCCESS:
      return {
        ...state, cars: action.payload
      };
    default:
     return state;
}
    
}

export default carsReduser;