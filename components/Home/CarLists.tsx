import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import BookingModel from '../CarBooking/BookingModel'

function CarLists(props: any) {
  const [isLoaded, setIsLoaded] = useState(true)
  const [selectedCar, setSelectedCar] = useState<any>([])
  useEffect(() => {
    if (props.carList) {
      setIsLoaded(false)
    }
  }, [props.carList])
  return (
    <div>
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-3 lg:grid-cols-4 gap-2">
        {!isLoaded && props.carList.map((car: any, index: number) => (
          <div key={index} className=' mt-5 m-[10px] lg:mx-auto '
          onClick={() => {(window as any).my_modal_4.showModal();
            setSelectedCar(car)
          }}>
            <CarCard car={car} />
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          </div>
        ))}
        {/* model */}
        <dialog id="my_modal_4" className="modal">
          <BookingModel  car={selectedCar}/>
        </dialog>
      </div>
    </div>
  )
}

export default CarLists