'use client'
import { BookingContext } from "@/context/BookingContext";
import CarLists from "@/components/Home/CarLists";
import CarsFilter from "@/components/Home/CarsFilter";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";
import CarLoader from "@/components/loader/CarLoader";

export default function Home() {
  useEffect(() => {
    carslist()
  }, [])

  const [carList, setCarList] = useState<any>([])
  const [carOrgList, setCarOrgList] = useState<any>([])
  const [toastMsg, setToastMsg] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Loader state
  const carslist = async () => {
    setLoading(true);
    const result: any = await getCarsList();
    setCarList(result.carLists);
    setCarOrgList(result.carLists);
    setLoading(false);
  };


  useEffect(() => {
    if (toastMsg) {
      setTimeout(function () {
        setToastMsg(false)
      }, 4000)
    }
  }, [toastMsg])
  const filterCarsList = (brand: string) => {
    const filterlist = carOrgList.filter((item: any) =>
      item.carBrand == brand)

    setCarList(filterlist)
  }

  const priceOrder = (order: any) => {
    const sortData = [...carOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price);
    setCarList(sortData)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookingContext.Provider value={[toastMsg, setToastMsg]}>
        {loading ? (
          <CarLoader /> 
        ) : (
          <>
            <Hero />
            <SearchInput />
            <CarsFilter
              carsList={carOrgList}
              setBrand={(value: string) => filterCarsList(value)}
              priceOrder={(value: string) => priceOrder(value)}
            />
            <CarLists carList={carList} />
          </>
        )}
        {toastMsg ? <ToastMsg msg={'Booking created successfully '} /> : null}
      </BookingContext.Provider>
    </div>
  );
}
