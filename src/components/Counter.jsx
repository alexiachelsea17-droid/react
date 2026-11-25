import React, {useState} from 'react'

const Counter = () => {
    const [angka, setAngka]= useState(0)

    const handleDecrement = () => {
      setAngka(angka -1)
    }

    const handleIncrement = () => {
     setAngka(angka + 1)
    }


    return (
        <div>
            <div className='text-6xl font-bold'>{angka}</div>
            <button 
                className='btn btn-primary' 
                onClick={handleIncrement}>
                Increment
            </button>
            <button 
                className='btn btn-secondary' 
                onClick={handleDecrement}>
                Decrement
            </button>
        </div>
    )
}


export default Counter
    

