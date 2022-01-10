
export type IDriver = {
	full_name: string,
	date_birth: number,
    registration: number,
    id: number,
	status: {
	title: string,
	code: string,
    },
}
  
const drivers : IDriver[] = [
    {
        full_name: 'Агомен Мондрызги',
        date_birth: 392847398748,
        registration: 8737627963726,
        id: 1,
        status: {
        title: 'Активен',
        code: '200',
        },
    },
    {
        full_name: 'Павло Зибров',
        date_birth: 999999398748,
        registration: 63726376126496,
        id: 2,
        status: {
        title: 'Неактивен',
        code: '401',
        },
    },
]

export default drivers;