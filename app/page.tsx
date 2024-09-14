'use client'
import CarsFilter from "@/components/Home/CarsFilter";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {

  
  return (
    <div>
      <Hero/>
      <SearchInput/>
      <CarsFilter/>
    </div>  
  );
}
