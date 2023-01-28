import React from 'react'

interface TipButtonProps {
  value: number
  onClickInput(): void
}

export default function TipButton({ value, onClickInput }: TipButtonProps) {

  return (
    <div
      onClick={() => onClickInput()}
      className='flex items-center justify-center py-2 px-4 text-xl bg-cyan-900 text-white rounded-lg hover:bg-cyan-500 cursor-pointer'>
      {`${value}%`}
    </div>
  )
}

