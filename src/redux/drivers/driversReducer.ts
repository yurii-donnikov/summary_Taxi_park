import {
  FETCH_DRIVERS,
  CREATE_DRIVER,
  DELETE_DRIVER,
  UPDATE_DRIVER,
  FETCH_DRIVER_STATUSES,
} from './driversTypes';

interface IStatus {
  title: string;
  code: string;
}

interface IDriver {
  id: number;
  first_name: string;
  last_name: string;
  date_created: number;
  date_birth: number;
  status: IStatus;
}

interface IDriversState {
  drivers: IDriver[];
  statuses: IStatus[];
}

const initialState: IDriversState = {
  drivers: [
    {
      id: 1,
      first_name: 'Bob',
      last_name: 'Marvel',
      date_created: 1641398211000,
      date_birth: 1236548000,
      status: {
        title: 'Активный',
        code: 'active',
      },
    },
    {
      id: 2,
      first_name: 'Jon',
      last_name: 'Jonson',
      date_created: 1641398777000,
      date_birth: 1356897000,
      status: {
        title: 'Заблокирован',
        code: 'blocked',
      },
    },
  ],
  statuses: [],
};

interface IAction<T> {
  type: string;
  payload: T;
}
type TReducer = IDriver & IDriver[] & IStatus[];

const driversReducer = <T extends TReducer>(
  state: IDriversState,
  action: IAction<T>,
): IDriversState => {
  state = state || initialState;

  switch (action.type) {
    case FETCH_DRIVERS:
      return { ...state, drivers: action.payload };

    case FETCH_DRIVER_STATUSES:
      return { ...state, statuses: action.payload };

    case CREATE_DRIVER:
      return { ...state, drivers: [...state.drivers, action.payload] };

    case DELETE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter(
          driver => driver.id !== action.payload.id,
        ),
      };

    case UPDATE_DRIVER:
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
