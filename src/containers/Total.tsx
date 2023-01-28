import React from 'react'
import ResetButton from '../components/ResetButton'
import TotalAPagar from '../components/TotalAPagar'

interface TotalProps {
  totalForAll: number
  totalForPerson: number
}

export default function Total({totalForAll, totalForPerson}: TotalProps) {
  return (
    <div className='h-full w-3/5 bg-cyan-900 flex flex-col rounded-xl p-10'>
       <TotalAPagar title='Total a pagar' subtitle='/ all' valor={+totalForAll}/>
       <TotalAPagar title='Total a pagar' subtitle='/ person' valor={+totalForPerson.toFixed(2)}/>
       <ResetButton />

    </div>
  )
}
