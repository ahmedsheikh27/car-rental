'use client'
import CarLists from "@/components/Home/CarLists";
import CarsFilter from "@/components/Home/CarsFilter";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
useEffect(()=>{
  carslist()
},[])

const [carList, setCarList] = useState<any>([])
  const carslist = async() => {
    const result:any = await getCarsList()
    setCarList(result.carLists)
    console.log(result.carLists)
  }

  return (
    <>
      <div>
        <Hero />
        <SearchInput />
        <CarsFilter />
        <CarLists carList={carList}/>
      </div>
    </>
  );
}
