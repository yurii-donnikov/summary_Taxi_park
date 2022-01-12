import * as type from './driversTypes';
import {
  IDriversState,
  IDriver,
  IDriverStatus,
} from '../../interfaces/driversInterfaces';
interface IAction<T> {
  type: string;
  payload: T;
}

type TReducer = IDriver & IDriver[] & IDriverStatus[];

const initialState: IDriversState = {
  drivers: [],
  statuses: [],
};

const driversReducer = <T extends TReducer>(
  state: IDriversState,
  action: IAction<T>,
): IDriversState => {
  state = state || initialState;

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
        drivers: state.drivers.filter(
          driver => driver.id !== action.payload.id,
        ),
      };

    case type.UPDATE_DRIVER_SUCCESS:
      return {
        ...state,
        drivers: state.drivers.map((driver: IDriver) => {
          if (driver.id === action.payload.id) {
            driver = Object.assign({}, driver, action.payload);
            return driver;
          }
          return driver;
        }),
      };

    default:
      return state;
  }
};

export default driversReducer;
