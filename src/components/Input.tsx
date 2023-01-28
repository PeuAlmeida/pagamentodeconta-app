import React, { useEffect, useState } from 'react'
import styles from '../styles/input.module.css'


interface InputProps {
  title: string
  childData(value: number): void
}

export default function Input({ title, childData}: InputProps) {

  const [value, setValue] = useState<Number>(0)

  return (
    <div className='flex flex-col w-full gap-2'>
      <label htmlFor="" className='text-cyan-900 tracking-wide font-semibold'>{title}</label>
      <input type="number"
        onChange={(e) => {setValue((+e.target.value))}}
        onKeyUp={() => childData(value)}
        value={value}
        required
        placeholder={title}
        className={`${styles.input} py-2 bg-opacity-5 bg-black rounded items-center text-cyan-900 font-bold text-xl px-2
        placeholder:text-base`} />
    </div>
  )
}
