import React from 'react'
import "./Buttons.scss"

const Buttons = () => {
    const Button = ({type})=>{
        return  (<div className='btn-container'>
        <p className={`btn ${type === 'buy' ? 'blue' : 'red'}Btn`}>$</p>
        <p>{type === "buy" ? 'Buy' : 'Sell'} BTC</p>
    </div>)
    }
  return (
    <div className='btn-section'>
        <Button type={'buy'} />
        <Button type={'sell'} />

    </div>
  )
}

export default Buttons