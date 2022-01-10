
export type ICar = {
    model: string,
    driver: string,
    mark: string,
    year: number,
    number: string,
    driver_id: number,
    status: {
        title: string,
        code: string,
    },
}

const cars: ICar[] = [
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
]

export default cars;