import React from 'react'
import CarCard from './CarCard'

function CarLists(props:any) {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.carList.map((car:any,index:number) => (
           <CarCard car={car}/>
        ))}
        </div>
    </div>
  )
}

export default CarLists