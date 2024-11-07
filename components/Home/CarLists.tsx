import React from 'react'
import CarCard from './CarCard'

function CarLists(props:any) {
  return (
    <div>
        <div className="m-3 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {props.carList.map((car:any,index:number) => (
           <CarCard car={car}/>
        ))}
        </div>
    </div>
  )
}

export default CarLists