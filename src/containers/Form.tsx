import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import TipButton from '../components/TipButton'
import styles from '../styles/input.module.css'

interface FormProps {
    calculate(totalForAll: number, totalForPeople: number): void
}

export default function Form({ calculate }: FormProps) {

    const [inputValue, setInputValue] = useState(0)
    const [tip, setTip] = useState(0)
    const [people, setPeople] = useState(1)

    const childAmountTotal = (childData: any) => {
        setInputValue(childData)
    }

    function onSubmit(e: any) {
        e.preventDefault()
        calculate((inputValue + tip), (inputValue + tip) / people)
    }

    return (
        <form onSubmit={onSubmit}
            className='w-3/5 h-full flex flex-col flex-1' >
            <Input title='Total a pagar' childData={childAmountTotal} />
            <div className='flex flex-col gap-4 flex-1 justify-center'>
                <h3 className='text-cyan-900 tracking-wide font-semibold'>Select tip %</h3>
                <div className='grid grid-cols-3 gap-2'>
                    <TipButton value={5} onClickInput={() => setTip(+(5 / 100) * inputValue)} />
                    <TipButton value={10} onClickInput={() => setTip(+(10 / 100 * inputValue))} />
                    <TipButton value={15} onClickInput={() => setTip(+(15 / 100 * inputValue))} />
                    <TipButton value={25} onClickInput={() => setTip(+(25 / 100 * inputValue))} />
                    <TipButton value={50} onClickInput={() => setTip(+(50 / 100 * inputValue))} />
                    <input
                        type="number"
                        value={tip}
                        onChange={(e) => setTip(+e.target.value)}
                        className={`${styles.input} rounded bg-black bg-opacity-5 text-cyan-900 px-2 font-bold text-xl`} />
                </div>
            </div>
            <div className='flex flex-col w-full gap-2'>
                <label htmlFor="" className={`text-cyan-900 tracking-wide font-semibold`}>Numero de Pessoas</label>
                <input type="number"
                    value={people}
                    onChange={(e) => setPeople(+e.target.value)}
                    required
                    placeholder='Numero de Pessoas'
                    className={`${styles.input} py-2 bg-opacity-5 bg-black rounded items-center text-cyan-900 font-bold text-xl px-2
                    placeholder:text-base`} />
            </div>
            <button className='flex mt-4 items-center justify-center py-2 px-4 text-xl bg-cyan-900 text-white rounded-lg hover:bg-cyan-500 cursor-pointer'>Calcular</button>
        </form >
    )
}
