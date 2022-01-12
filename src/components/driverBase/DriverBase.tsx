
export type IDriver = {
	first_name: string,
    last_name: string,
    date_created: number,
    date_birth: number,
    id: number,
	status: {
	title: string,
	code: string,
    },
}
  
const drivers : IDriver[] = [
    {   first_name: 'Агомен',
        last_name: 'Мондрызги',
        date_birth: 392847398748,
        date_created: 8737627963726,
        id: 1,
        status: {
        title: 'Активен',
        code: '200',
        },
    },
    {
        first_name: 'Павло',
        last_name: 'Зибров',
        date_birth: 999999398748,
        date_created: 63726376126496,
        id: 2,
        status: {
        title: 'Неактивен',
        code: '401',
        },
    },
]

export default drivers;