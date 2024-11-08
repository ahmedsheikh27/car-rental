'use client'
import CarLists from "@/components/Home/CarLists";
import CarsFilter from "@/components/Home/CarsFilter";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    carslist()
  }, [])

  const [carList, setCarList] = useState<any>([])
  const [carOrgList, setCarOrgList] = useState<any>([])
  const carslist = async () => {
    const result: any = await getCarsList()
    setCarList(result.carLists)
    setCarOrgList(result.carLists);
  }

const filterCarsList = (brand:string) => {
const filterlist = carOrgList.filter((item:any) =>
item.carBrand==brand)

setCarList(filterlist)
}

const priceOrder = (order:any) => {
  const sortData = [...carOrgList].sort((a,b)=>
  order==-1? a.price - b.price:b.price - a.price);
  setCarList(sortData)
}

  return (
    <>
      <div>
        <Hero />
        <SearchInput />
        <CarsFilter carsList={carOrgList}
          setBrand={(value: string) => filterCarsList(value)} 
          priceOrder={(value: string) => priceOrder(value)}
          />
        <CarLists carList={carList} />
      </div>
    </>
  );
}
