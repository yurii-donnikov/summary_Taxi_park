import { IDriver } from './../../interfaces/driversInterfaces';
import * as type from './driversTypes';
import {
  IDriversState,
  IAction,
  IUpdateDriver,
} from '../../interfaces/driversInterfaces';

const initialState: IDriversState = {
  drivers: [],
  statuses: [],
};

const driversReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case type.FETCH_DRIVERS_REQUEST:
    case type.FETCH_DRIVER_STATUSES_REQUEST:
    case type.CREATE_DRIVER_REQUEST:
    case type.DELETE_DRIVER_REQUEST:
    case type.UPDATE_DRIVER_REQUEST:
      return { ...state };

    case type.FETCH_DRIVERS_SUCCESS:
      return { ...state, drivers: action.payload };

    case type.FETCH_DRIVER_STATUSES_SUCCESS:
      return { ...state, statuses: action.payload };

    case type.CREATE_DRIVER_SUCCESS:
      return { ...state, drivers: [...state.drivers, action.payload] };

    case type.DELETE_DRIVER_SUCCESS:
      return {
        ...state,
        drivers: state.drivers.filter(driver => driver.id !== action.payload),
      };

    case type.UPDATE_DRIVER_SUCCESS:
      return {
        ...state,
        drivers: [
          ...state.drivers.map(driver =>
            driver.id !== action.payload.id ? driver :{...driver, ...action.payload},
          ),
        ],
      };



    default:
      return state;
  }
};

export default driversReducer;
