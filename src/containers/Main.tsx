import { useEffect, useState } from 'react'
import Form from './Form'
import Total from './Total'

export default function Main() {

    const [totalForAll, setTotalForAll] = useState(0)
    const [totalForPerson, setTotalForPerson] = useState(0)

    const calculate = (totalForAll: any, totalForPerson: number) => {
        setTotalForAll(totalForAll)
        setTotalForPerson(totalForPerson)
    }

    return (
        <div className='bg-white h-4/6 w-4/6 rounded-2xl flex justify-between p-10 gap-6 '>
            <Form calculate={calculate} />
            <Total totalForAll={totalForAll} totalForPerson={totalForPerson} />
        </div>
    )
}
