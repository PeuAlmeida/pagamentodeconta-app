interface TotalAPagarProps {
    title: string
    subtitle?: string
    valor?: number
}

export default function TotalAPagar({ valor = 0, title, subtitle }: TotalAPagarProps) {
    return (
        <div className='flex justify-between flex-1'>
            <div className='flex flex-col'>
                <h2 className='text-white tracking-wide '>{title}</h2>
                <p className='text-white text-opacity-30'>{subtitle}</p>
            </div>
            <div>
                <h2 className=' text-2xl font-bold text-cyan-500'>{`R$ ${valor}`}</h2>
            </div>
        </div>
    )
}
