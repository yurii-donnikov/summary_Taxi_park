export type ICar = {
  model: string;
  driver: string;
  mark: string;
  year: number;
  number: string;
  driver_id: number;
  status: IStatus;
};

export type IStatus = {
  title: string;
  code: string;
};

export const statuses: IStatus[] = [
  {
    title: 'Активный',
    code: 'active',
  },
  {
    title: 'Заблокирован',
    code: 'blocked',
  },
  {
    title: 'Уволенный',
    code: 'fired',
  },
  {
    title: 'Не активный',
    code: 'not_active',
  },
];

export const cars: ICar[] = [
  {
    model: 'Мазда',
    driver: 'Агомен Мондрызги',
    mark: 'CX5',
    year: 2009,
    number: '3303',
    driver_id: 1,
    status: {
      title: 'Активен',
      code: '200',
    },
  },
  {
    model: 'Жигули',
    driver: 'Павло Зибров',
    mark: '6',
    year: 1935,
    number: '6666',
    driver_id: 2,
    status: {
      title: 'Неактивен',
      code: '401',
    },
  },
];
